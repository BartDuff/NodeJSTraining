const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 5000;
const beautifulHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Table multiplication</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
</head>`;

function envoyerTableau(para, res) {
    res.write(beautifulHTML);
    res.write(`<body style="background-color: lightGray;"><h1>Wonderfull Math Table</h1><table class="table bg-warning">`);
    res.write(`<tr><th>*</th>`);
    for (let i = para.xmin; i <= para.xmax; i++) {
        res.write(`<th>${ i }</th>`);
    }
    res.write(`</tr>`);
    for (let j = para.ymin; j <= para.ymax; j++) {
        res.write(`<tr>`);
        res.write(`<th>${ j }</th>`);
        for (let i = para.xmin; i <= para.xmax; i++) {
            res.write(`<td>${ i*j }</td>`);
        }
        res.write(`</tr>`);
    }
    res.end(`</table><a href="/add/xmin" class="btn btn-success">xmin+1</a></body></html>`);
}



app.route('/table')
    .get((req, res) => {
        fs.readFile('parameters.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            }
            const parameters = JSON.parse(data);
            envoyerTableau(parameters, res);
        });
        console.log("Tableau généré avec succès!");
    });

app.route('/add/xmin')
    .get((req, res) => {
        fs.readFile('parameters.json', 'utf8',
            (err, data) => {
                if (err) {
                    console.log("error");
                }
                const parameters = JSON.parse(data);
                parameters.xmin++;
                fs.writeFile('parameters.json', JSON.stringify(parameters),
                    err => {
                        if (err) {
                            console.log(err);
                        }
                        res.writeHead(302, {
                            'location': '/table'
                        });
                        res.end();
                    });
            })
    });

app.listen(port, hostname, () => {
    console.log(`Ecoute sur le port: ${port}`)
});