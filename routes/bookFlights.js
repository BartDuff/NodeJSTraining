const express = require('express');

const bookFlightsRouter = express.Router();

bookFlightsRouter.get('/', (req, res) => {
    res.end("Book a flight! ");
})
.get('/:id', (req, res) => {
    res.end("Réservation du vol: " + req.params.id);
})

module.exports = bookFlightsRouter;