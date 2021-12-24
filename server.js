var express = require('express');
var fs = require("fs");
var app = express();

app.get('/hello', function (req, res) {
var us = [{user: 1,name:'puneet',mail:'pun@gmail.com'},{user: 2,name:'puneet2',mail:'pun2@gmail.com'}];
//us.user = "new";
var data;
/*try {
data = JSON.stringify(us);
fs.writeFileSync('test.json', data);
console.log("JSON data is saved.");
} catch (error) {
console.error(err);
}*/




res.json(us);
})


app.post('/registerUser', (req, res) => {
/*var res = {user_id:-1};

var user_id;
//var car = {type:"Fiat", model:"500", color:"white"};
try{
fs.readFile('user.json', 'utf-8', (err, data) => {
if (err) {
throw err;
}

// parse JSON object
user_id = JSON.parse(data.toString());

// print JSON object
console.log(user);
});
} catch(error)
{
user_id = -1;
}



try {
fs.writeFileSync('user.json', data);
console.log("JSON data is saved.");
} catch (error) {
console.error(err);
}


var user_id = db.get('user',req.query.name,req.query.email);
if(user_id == -1)
{
res.user_id = db.createEntry('user',req.query.name,req.query.email);
}*/
    res.send("");
});


app.get('/createNewsLetter', (req, res) => {

var res = {newsletter_id:-1};
/*var user_id = db.getByID('user',req.query.id);
if(!user_id)
{
res = "Please register to the platform"
}
var newsletter_id = db.getByID(req.query.newsletter_id);
if(newsletter_id && user_id)
{
res = res + db.createEntry('subscription',req.query.newsletter_id, req.query.user_id);
}*/
    res.send("createNewsLetter");
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
