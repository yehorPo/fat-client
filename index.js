let express = require('express');
let server = express();
let mongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://admin:admin@cluster0.zdqyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
let urlencoded = require('body-parser');
let ObjectId = require('mongodb').ObjectId;
let moment = require('moment');
server.set("view engine", "pug");
server.set('views', './');
const PORT = 5000;
server.use(express.static(__dirname));
server.use(urlencoded({extended: true}));
let db;
mongoClient.connect(url, (err, client) => {
    if (err) return console.log(err);
    db = client.db('post');
    server.listen(PORT, () => {
        console.log('Port: '+PORT)
    })
});

server.get('/', (req, res) => {
    res.render('./index.pug');
});

server.get('/admin', (req, res) => {
    db.collection('post').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.render('./admin_home.pug', {blogs: result})
    })
});
server.get('/api/post', (req,res) => {
    db.collection('post').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.json({blogs: result});
    })
});

server.post('/api/post', (req, res) => {
    db.collection('post').insertOne(req.body).then(
        (result, err) => {
            if (err) return console.log(err);
            res.redirect('/admin');
        })
});

server.get('/add', (req, res) => {
    res.render('./add.pug');
});


server.get('/update/:id', (req, res) => {
    db.collection('post').findOne(ObjectId(req.params.id)).then(
        (result, err) => {
            if (err) return console.log(err);
            res.render('./update.pug', {blog: result, id: req.params.id});
        });
});

server.get('/read/:id', (req, res) => {
    db.collection('post').findOne(ObjectId(req.params.id)).then(
        (result, err) => {
            if (err) return console.log(err);
            res.render('./read.pug', {blog: {...result,date: moment(result.date).format('DD.MM.YYYY')}});
        });
});


