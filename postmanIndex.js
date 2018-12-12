// importation d'express

const express = require('express');
const morgan = require('morgan');

// création d'une appli Express
const app = express()

app.use(morgan('short'));

app.get('/coucou', (req, res) => {
    res.end('Demande de /coucou en GET ');
})

// on peut utiliser postman pour envoyer des requêtes 
app.post('/coucou', (req, res) => {
    res.end('Demande avec postMan de /coucou en POST ');
})

app.route('/book')
.get(function(req, res) {
    res.send('Sent a random book')})
.post(function(req, res) {
    res.send('Add a book')})
.delete((req, res) => res.send('Book deleted'));

//création d'un middleware #2
app.use((req, res) => {
    console.log(`Dans le middleWare #2 - ${ req.url }`);
    res.end(`Réponse du middleware #2`);
})
// Ecoute du serveur sur le port 5000
app.listen(5000, () => {
    console.log("Ecoute sur le port 5000...")
})