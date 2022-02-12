const axios = require('axios');

async function getJson(url){
    const res = await axios.get(url);
    return res
}

// axios.get('http://localhost:5050').then(res=>console.log(res.data));
getJson('http://localhost:5050').then(res=>console.log(res.data));