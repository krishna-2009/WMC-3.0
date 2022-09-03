const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Express specific stuff

app.use('/static', express.static('static'))
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.render('login')
});

app.get('/index', function (req, res) {
    console.log(req.body);
    res.render('index')
});

app.get('/contact', function (req, res) {
    res.render('contact')
});

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
});