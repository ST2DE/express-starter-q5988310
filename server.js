var express = require('express');
var app = express();
var session = require('express-session');
var db = require('./models');
var bodyParser = require('body-parser');

app.use(session({secret: '123456789', saveUninitialized: false, resave: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine','ejs');
app.listen(3000, function() {
  db.sequelize.sync();
});

var routes = require('./routes')(app);