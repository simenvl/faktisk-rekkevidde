'use strict';
const express = require('express');

const path = require('path');

const indexRouter = require("../routes/index.js");

const app = express();

app.get('/test', indexRouter); 

const port = process.env.PORT || 8080;

app.listen(port);