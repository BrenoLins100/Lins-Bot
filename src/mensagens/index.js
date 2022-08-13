/*Escutando as mensagens */

import {Client} from '@open-wa/wa-automate';
import {decryptMedia} from '@open-wa/wa-decrypt';

/* Menu */
import {menu} from '../lib/menu.js'

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
            case "$img":
                var url = "https://i.pinimg.com/222x/ae/fc/a5/aefca55684256c0a467ad82663342a0b.jpg"
                lins.sendFileFromUrl(from, url, 'foto.jpg', '')
            break
        }    
    }catch(err){
        console.log("Erro:"+err)
    }

}

export {capturaMensagem}