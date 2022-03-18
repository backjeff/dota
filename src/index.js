var express = require('express');
var app = express();
const fs = require('fs');

app.get('/alchemist', function(req, res) {
    res.json(
        JSON.parse(fs.readFileSync('src/heroes/alchemist.json'))
    );
});

app.get('/kunkka', function(req, res) {
    res.json(
        JSON.parse(fs.readFileSync('src/heroes/kunkka.json'))
    );
});

app.get('/io', function(req, res) {
    res.json(
        JSON.parse(fs.readFileSync('src/heroes/io.json'))
    );
});

app.listen(3000, () => {
    console.log("Dota app running")
})