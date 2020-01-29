const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

const datetime = new Date();

app.use(cors())

app.get('/random_number', (req, res) => {
    axios.get(`http://numbersapi.com/${datetime.getMonth()+1}/${datetime.getDate()}/date`)
    .then(response => {
        return res.status(200).json(response.data)
    })
    .catch(error => {
        console.log(error);
    })
});

const PORT = 8080
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
});