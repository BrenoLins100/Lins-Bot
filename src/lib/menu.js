// opcoes do bot
import {config} from '../config/config.js';

const menu = {

    // prop que retorna um texto menu
    menuPrincipal: ()=>
    {
        return ` ╭━━⪩ *MENU DE COMANDOS* ⪨━━
 |  ${config.emojiPrefixo}${config.nomeBot}
 | ╭═══⊷
 | 🔹 ${config.prefixo}menu
 | 🔹 ${config.prefixo}figurinha 
 |  (transforma imagem figurinha)
 | 🔹 
 | 🔹 
 | 🔹 
 | ╰═══⊷
 |
╰━━─「${config.emojiPrefixo}」─━━ 
       `
    }
}

export {menu}