//import express
const express = require('express');
const app = express();
//define port for local development
const port = 3000;
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

    res.json({ records: records.find(item => item.id === Number(req.params.id)) });

});

//this code will launch/spin up our server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});