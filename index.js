var API = require("node-se-API-connector");
var loginData = require('./logindata.json');

//For debug
console.log("API-Object: ", API);
console.log("LoginData: ", loginData);

var now = new Date();

API.setAPIkey(loginData.apiKey);

API.container.get(loginData.container_id).then(function(container){
    console.log(container);
})

API.push.start(loginData.container_id).then(function(emitter){
    console.log("Got emitter");
    emitter.on('connect', function(){
        console.log("Emitter: Got connect");
    });
    emitter.on('data',function(data){
        console.log("Emitter: got data");
        API.push.result(data.containerId, data.messageId, true).then(function(){
            console.log("Pushed result!");
        });
    });
    emitter.on('error', function(reason){
        console.log("Emitter: got error ", reason);
    });
    emitter.on('disconnect', function(reason){
        console.log("Emitter: got disconnect ", reason);
    });
}).fail(function(reason){
    console.log(reason);
});

setTimeout(function(){
    console.log("Timeout triggered");
    API.push.stop(loginData.container_id);
},600000);



/*
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
        new API.classes.Agent(loginData.container_id, "EXTERNAL-SOFTWARE", "TESTAGENT");

API.agent.post(testAgent).then(function(res){console.log(res);}).fail(function(res){console.log(res);});


//var testContainer = API.container.get(loginData.container_id).then(function(res){console.log(res);}).fail(function(res){console.log(res);});

        new API.classes.Container(
        loginData.customer_id, loginData.parent_id, "TestContainer", "REAL_TEST_CONTAINER", 2
);

console.log(testContainer);

API.container.post(testContainer).then(function(res){console.log(res);}).fail(function(res){console.log(res);});

*/