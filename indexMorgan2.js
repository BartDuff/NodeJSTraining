// importation d'express

const express = require('express');
const morgan = require('morgan');

// création d'une appli Express
const app = express()

app.use(morgan('short'));

app.use(express.static(__dirname + '/public_html'));

//création d'un middleware #2
app.use((req, res) => {
    console.log(`Dans le middleWare #2 - ${ req.url }`);
    res.end(`Réponse du middleware #2`);
})
// Ecoute du serveur sur le port 5000
app.listen(5000, () => {
    console.log("Ecoute sur le port 5000...")
})