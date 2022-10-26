const express = require("express")
const app = express();
const cors = require('cors');
const Port = process.env.Port || 5000;
app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send("digital edu server is running");
});

app.get('/news-categories', (req, res) => {
    res.send(categories)
});

app.listen(Port, () => {
    console.log("digital edu server is running", Port);
});