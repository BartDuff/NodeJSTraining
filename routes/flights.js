const express = require('express');

const flightRouter = express.Router();

flightRouter.get('/', (req, res) => {
    res.end("Liste des vols");
})
.get('/:id', (req, res) => {
    res.end("Récupération du vol: " + req.params.id);
})

module.exports = flightRouter;