const helmet=require('helmet');
const compression=require('compression');
const express = require('express')
var app = express();

app.use(compression(),helmet())