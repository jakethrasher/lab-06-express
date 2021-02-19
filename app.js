//import express
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const { records } = require('./data.js');

//app is where we define our routes/endpoints
app.get('/records', (req, res) => {

    res.json({ results: records });

});



app.get('/records/:id', (req, res) => {

    // const id = Number(req.params.id);
    // const selectedItem = records.find((item) => item.id === id);

    res.json({ results: records.find(item => item.id === Number(req.params.id)) });

});

module.exports = {
    app
};

