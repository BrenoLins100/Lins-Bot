/*Escutando as mensagens */

import {Client} from '@open-wa/wa-automate'

async function capturaMensagem (lins = new Client(), message) {
    console.log(message.body)
}

export {capturaMensagem}