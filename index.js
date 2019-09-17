const BodyParser = require("body-parser");
const Router = require('./router')
const Express = require("express");
const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');
var app = Express();

const middleware = require('./middleware');



const DATABASE_NAME = "Redux";
const CONNECTION_URL = `mongodb+srv://root:root@cluster0-qdaot.mongodb.net/${DATABASE_NAME}?retryWrites=true`;
let PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true })
mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is open to ");
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// app.use('/api/',(req,res,next)=>{
//    console.log(req.url,req.body)
//     if(!req.headers["authorization"]){
//        res.send({status:402,message:'No token provided'})
//     }else {
//         jwt.verify(req.headers["authorization"], 'qqqq',(err,decoded)=>{
//             if(err){
//                 console.log(err)
//               res.send({status:403,message:'Invalid token'})
//             }
//         });
//     }
    
    
//     next();
// })
app.use('/',Router)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})


