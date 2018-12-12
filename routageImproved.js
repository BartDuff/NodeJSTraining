// importation d'express
const express = require('express');
const calc = require('./myCalculator');
// création d'une appli Express
const app = express()


app.get('/:op(add|mult|div|sub)?/:a(\\d+)/:b(\\d+)', (req, res) => {
    var a = +req.params.a;
    var b = +req.params.b;
    let resultat = 0;
    switch (req.params.op) {
        case 'add':
            resultat = calc.ajouter(a, b);
            break;
        case 'sub':
            resultat = calc.soustraire(a, b);
            break;
        case 'mult':
            resultat = calc.multiplier(a, b);
            break;
        case 'div':
            resultat = calc.diviser(a, b);
            break;
        default:
            resultat = 'Cannot understand';
    }
    res.send(resultat.toString())
});

// Ecoute du serveur sur le port 5000
app.listen(5000, () => {
    console.log("Ecoute sur le port 5000...")
})