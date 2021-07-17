import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.pokemontcg.io/v2',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});