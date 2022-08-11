/*Escutando as mensagens */

import {Client} from '@open-wa/wa-automate';
import {decryptMedia} from '@open-wa/wa-decrypt';

/* Menu */
import {menu} from '../lib/menu.js'

async function capturaMensagem (lins = new Client(), message) {

    try{

        //tipos de mensagem
        const {body, caption, isMedia, quotedMsg, mimetype, from, id} = message;

        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'


        if(message.body === "$menu"){
            lins.sendText(message.from, menu.menuPrincipal())
            console.log(menu.menuPrincipal)
        } else if(message.body === "$figurinha"){
            if (isMedia || quotedMsg){
                let figurinhaMetadados = {
                    author: "Lins Bot",
                    pack: "Lins Bot",
                    keepScale: true,
                    circle: false,
                }

                var dadosMsg = {
                    tipo: (isMedia) ? type: quotedMsg.type,
                    mimetype: (isMedia)? mimetype: quotedMsg.mimetype,
                    mensagem: (isMedia)? message: quotedMsg
                }

                if(dadosMsg.tipo === "image"){
                    var dadosMidia = await decryptMedia(dadosMsg.mensagem, uaOverride);
                    var imgBase64 = `data:${dadosMsg.mimetype};base64, ${dadosMidia.toString('base64')}`
                    lins.sendImageAsSticker(from, imgBase64, figurinhaMetadados).catch(err=>{
                        console.log(err.message, "FIGURINHA")
                    })

                }else{
                    return lins.reply(from, "Erro", id)
                }
            }
        }
    }catch(err){
        console.log("Erro:"+err)
    }

}

export {capturaMensagem}