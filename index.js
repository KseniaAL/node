let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); //ля принятия данных из формы, обязательно!
app.use(bodyParser.json()); //ля принятия данных из формы, обязательно!

let index = require('./routes/index');
app.use('/', index);

let article = require('./routes/article');
app.use('/article', article);

let admin = require('./routes/admin');
app.use('/admin', admin)

app.get('/', function (req, res){
    res.send("<h2>привет, Express</h2>")
});
app.listen(3000);
