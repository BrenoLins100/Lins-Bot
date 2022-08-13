// importando axios 

import axios from 'axios';

//teste

const api = axios.create({
    baseURL: 'https://meme-api.herokuapp.com/gimme'
});

export {api}