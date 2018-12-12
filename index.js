// importation d'express

const express = require('express');

// création d'une appli Express
const app = express()

//création d'un middleware #1
app.use((req, res, next) => {
    console.log(`Dans le middleWare #1 - ${ req.url }`);
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    res.write(`Réponse du middleware #1`);
    next(); // permet de passer au middleware suivant
})

//création d'un middleware #2
app.use((req, res) => {
    console.log(`Dans le middleWare #2 - ${ req.url }`);
    res.end(`Réponse du middleware #2`);
})
// Ecoute du serveur sur le port 5000
app.listen(5000, () => {
    console.log("Ecoute sur le port 5000...")
})