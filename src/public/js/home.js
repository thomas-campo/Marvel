const API_URL = "https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=39011b8bf648e2690b47a9ba4ebd6bca";

fetch(API_URL,{
    method: "GET",
    headers: {
        'apikey' : "10bf2248c764fbd7c9ebdc0cbcc9412f80d9aa9e"
    },
    mode: 'no-cors'
})
    .then(resp => resp.json())
    .then(data =>{
        console.log(data,"data")
    })
    .catch(error => console.log('Authorization failed : ' + error.message + error));