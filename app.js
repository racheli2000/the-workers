

const express= require('express');
const app= express();
const env= require('dotenv');
const mongoose= require('mongoose');
const router = require('./route/api');
const bodyParser= require('body-parser');
// const jwt= require('jsonwebtoken');
// const cors = require("cors");

env.config();

app.use(bodyParser.json());

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
.then(() => {
    console.log("connect!!!");
}).catch((err) => {
    console.log(`error connection ${err}`);
}) 

app.use('/',router);

// app.use('/', function(req, res, next) {

//     try{
//         jwt.verify(req.headers['authorization'], process.env.SECRET);
//         next();
//     }
//     catch(err){
//         console.log(err);
//         res.send("please try again!")
//     }

// })

app.listen(3001, () => {console.log("listen port 3001")});

// app.all("/*", function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
//     res.header(
//         "Access-Control-Allow-Headers",
//         'Content-Type, Authorization, Content-Length, X-Requested-With'
//     );
//     if (req.method === 'OPTIONS') {
//         res.status(200).end();
//     } else {
//         next();
//     }

// });

