const express = require('express');

const path = require('path');

const app = express();

app.get('/test', (req, res) => {
    rjson = {
        'navn': 'Simen'
    }
    res.json(rjson)   
})

const port = process.env.PORT || 8080;

app.listen(port);

console.log('App lytter');