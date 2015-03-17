var API = require("node-se-API-connector");
var loginData = require('./logindata.json');

//For debug
console.log(API);
console.log(loginData);

API.setAPIkey(loginData.apiKey);

API.container.get(loginData.containerID).then(function(res){
    console.log(res);
});