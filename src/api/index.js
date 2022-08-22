// importando axios 

import axios from 'axios';

//Api gimme

const gimme = axios.create({
    baseURL: 'https://meme-api.herokuapp.com/gimme'
});

//Api Dalle Mini Crayion



export {gimme}