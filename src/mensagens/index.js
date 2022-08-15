/*Escutando as mensagens */

import {Client} from '@open-wa/wa-automate';
import {decryptMedia} from '@open-wa/wa-decrypt';

/* Menu */
import {menu} from '../lib/menu.js';

/*Api gimme */

import {api} from '../api/index.js';

async function capturaMensagem (lins = new Client(), message) {

    try{

        //tipos de mensagem
        const {body, caption, isMedia, quotedMsg, mimetype, from, id} = message;

        //override
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'

        //filtros para as mensagens 

        //comandos

        const comandos = body || caption || ''

        // filtro comando

        // pegando apenas a primeira letra da frase caso seja um comando $

        const comando = comandos.toLowerCase().split(' ')[0] || ''


        //switch comando $+comando, exemplo: $menu

        switch(comando){
            case "$menu":
                lins.sendText(from, menu.menuPrincipal())
            break
            case "$figurinha":
                //separar em outro arquivo dps
                console.log('Manuntenção')
            break
            //envia um meme do reddit - diretodozapzap
            case "$meme":
                const resposta = await api.get('diretodozapzap')
                .then((response)=> response)
                //caso de erro
                .catch((err)=>{lins.sendText(from, "⛔ Ocorreu um erro ao processar a imagem ⛔" )})
                //caso a requisição de certo a imagem sera enviada
                lins.sendFileFromUrl(from, resposta.data.url, 'foto.jpg',resposta.data.title )
            break
        }    
    }catch(err){
        console.log("Erro:"+err)
    }

}

export {capturaMensagem}