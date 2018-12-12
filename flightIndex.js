// importation d'express
const express = require('express');
const flightsRoutes = require('./routes/flights');
const bookFlightsRoutes = require('./routes/bookFlights');
const app = express();

app.use('/flights', flightsRoutes)
.use('/bookFlights', bookFlightsRoutes)

// Ecoute du serveur sur le port 5000
app.listen(5000, () => {
    console.log("Ecoute sur le port 5000...")
})