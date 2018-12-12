// importation d'express
const express = require('express');
const calc = require('./myCalculator');
// création d'une appli Express
const app = express()


app.get('/add/:a(\\d+)/:b(\\d+)', (req, res) => {
    var a = +req.params.a;
    console.log(a);
    var b = +req.params.b;
    console.log(b);
    res.send(calc.ajouter(a, b).toString())
}).get('/mult/:a/:b', (req, res) => {
    var a = +req.params.a;
    var b = +req.params.b;
    res.end(calc.multiplier(a, b).toString());
})
.get('/div/:a/:b',  (req, res) => {
    var a = +req.params.a;
    var b = +req.params.b;
    if(b !== 0) {
        res.end(calc.diviser(a, b).toString());
    } else {
        res.end('Division par 0 impossible');
    }
})
.get('/sub/:a/:b',  (req, res) => {
    var a = +req.params.a;
    var b = +req.params.b;
    res.end(calc.soustraire(a, b).toString());
});

// Ecoute du serveur sur le port 5000
app.listen(5000, () => {
    console.log("Ecoute sur le port 5000...")
})