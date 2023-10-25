const API_URL = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=39011b8bf648e2690b47a9ba4ebd6bca&hash=2c1ae4f43d48f6896f963aa5ae3e7fb5 ";

fetch(API_URL,{
    method: "GET",
    headers: {
        'apikey' : "10bf2248c764fbd7c9ebdc0cbcc9412f80d9aa9e"
    },
    mode: 'same-origin'
})
    .then(resp => resp.json())
    .then(data =>{
        console.log(data,"data")
    })
    .catch(error => console.log('Authorization failed : ' + error.message + error));