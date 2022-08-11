import express from "express";
import {options} from './src/config/options.js'
import {capturaMensagem} from "./src/mensagens/index.js"

/* Imports */
import { create, Client } from "@open-wa/wa-automate";

const start = (lins = new Client ())=>{
    lins.onMessage ((message)=>{
        capturaMensagem(lins,message);
    });
};
create(options(start))
    .then((lins)=> start(lins))
    .catch((err)=>console.log('Erro ao conectar:'+err))



