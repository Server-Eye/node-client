var API = require("node-se-API-connector");
var loginData = require('./logindata.json');

//For debug
console.log("API-Object: ", API);
console.log("LoginData: ", loginData);

API.setAPIkey(loginData.apiKey);

/*
API.container.create({
    name: "TestName",
    realName: "TestRealName",
    type: 4,
    parentId: loginData.containerID
}).then(function(res){
    console.log(res);
}).fail(function(res){
    console.log(res);
});
*/