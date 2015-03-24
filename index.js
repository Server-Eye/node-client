var API = require("node-se-API-connector");
var loginData = require('./logindata.json');

//For debug
console.log("API-Object: ", API);
console.log("LoginData: ", loginData);

var now = new Date();

API.setAPIkey(loginData.apiKey);

API.agent.notify(loginData.agent_id, loginData.container_id, {
    guid: loginData.agent_id,
    error: true,
    message:"this is a msg",
    utcMs: now.getTime()
}).then(function(res){
console.log("SUCCESS");
console.log(res);
API.agent.get(loginData.agent_id).then(function(res){console.log(res);}).fail(function(res){console.log(res);});}).fail(function(res){console.log(res);});

//API.agent.get(loginData.agent_id).then(function(res){console.log(res);}).fail(function(res){console.log(res);});

/*
        new API.classes.Agent(loginData.container_id, "EXTERNAL-SOFTWARE", "TESTAGENT");

API.agent.post(testAgent).then(function(res){console.log(res);}).fail(function(res){console.log(res);});


//var testContainer = API.container.get(loginData.container_id).then(function(res){console.log(res);}).fail(function(res){console.log(res);});

        new API.classes.Container(
        loginData.customer_id, loginData.parent_id, "TestContainer", "REAL_TEST_CONTAINER", 2
);

console.log(testContainer);

API.container.post(testContainer).then(function(res){console.log(res);}).fail(function(res){console.log(res);});

*/