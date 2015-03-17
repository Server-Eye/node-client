var API = require("node-se-API-connector");

console.log(API);

console.log(API.getAPIkey(), "should be undef");
console.log(API.setAPIkey("I4m4k3y"), "should be set");
console.log(API.getAPIkey(), "is set");

var testDate = new Date();

testDate.setMinutes(testDate.getMinutes()+ 10);

API.auth.key("roland.paltz@kraemer-it.de", "6feetunderthesea", "testAPIkey", 0, testDate, 10).then(function(result){
    console.log("Key: ", result.data.apiKey);
});