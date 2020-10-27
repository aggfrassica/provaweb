// ---- LIBS ---- //
const express = require('express');
const path = require('path');

// ---- SETTINGS ---- //
const port = 55000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.set
// ---- ROUTES---- //
app.get('*', (req, res, next) => {
    console.log(req.connection.remoteAddress + ' requested ' + req.url);
    next();
});

// handle get requests
app.get(['/', '/home'], (req, res) => {
    res.status(200);
    res.render(path.join(__dirname, 'views', 'home.ejs'));
});

app.get('/vetrina', (req, res) => {
    res.status(200);
    res.render(path.join(__dirname, 'views', 'vetrina.ejs'));
});
app.get('/ecommerce', (req, res) => {
    res.status(200);
    res.render(path.join(__dirname, 'views', 'ecommerce.ejs'));
});

// handle tutte le route non gestite
app.get('*', (req, res) => {
    res.status(200);
    res.render(path.join(__dirname, 'views', '404.ejs'));
});

app.listen(port);
console.log('you are listening to port ' + port);