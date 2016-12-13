var express = require('express');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var path = require('path');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/stylesheets', express.static(path.join(__dirname, '../public/stylesheets')));
app.use('/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use(express.static(__dirname + "/../public"));

// nunjucks.configure('views', { noCache: true });
// app.set('view engine', 'html');
// app.engine('html', nunjucks.render);


// ERROR HANDLING
app.use('/', require('./routes'));


app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// START SERVER

app.listen(1337, function (err) {
  if (err) throw err;
  console.log("Listening on 1337");
})
