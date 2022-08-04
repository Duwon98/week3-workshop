var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function () {
    console.log("Server has been started")
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/www/form.html");
});

// route to check user credentials and report if valid
// app.post('/api/account', function (req, res) {
//     // if there is no information from user/ just return error 
//     if (!req.body) {
//         return res.sendStatus(400)
//     }
//     var customer = {};
//     customer.email = req.body.email;
//     customer.upwd = req.body.upwd;
//     var loginData = [["abc@com.au", "123"]];

//     loginData.push(["abc@come.au","123"])
//     loginData.push(["abcd@come.au","123"])
//     loginData.push(["abcde@come.au","123"])


//     for(let i=0; i<loginData.length; i++){
//         if (req.body.email == loginData[i][0] && req.body.upwd == loginData[i][1]){
//             customer.valid = true;
//             break;
//         }
//         customer.valid = false;
//     }
//     res.send(customer);
// });

app.post('/api/login', function (req, res) {
    // if there is no information from user/ just return error 
    if (!req.body) {
        return res.sendStatus(400)
    }

    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;

    // Login Data with Array
    var loginData = [];
    loginData.push(["abc@come.au","123"])
    loginData.push(["abcd@come.au","123"])
    loginData.push(["abcde@come.au","123"])

    // Looping the database (Array)
    for(let i=0; i<loginData.length; i++){
        // If email and Password are same. break the loop
        if (req.body.email == loginData[i][0] && req.body.upwd == loginData[i][1]){
            customer.valid = true;
            break;
        }else{
            customer.valid = false;
        }
    }
    res.send(customer);
});