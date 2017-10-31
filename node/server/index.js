const express = require('express');
const bodyParser = require('body-parser');
// const inventory = require('./inventory')
const massive = require('massive');

const app = express();
const connectingString = 'postgres://dbmjlpsmphpnyr:5c02edb372d76cf195d37cd0ed787254d0f50da1e62e306ab080bc043702ff83@ec2-54-83-26-65.compute-1.amazonaws.com:5432/depoq96jov1nm1?ssl=true';

massive(connectingString).then( db => {
    app.set('db',db);
} )

app.use( bodyParser.json() );


app.get('/api/inventory/:shelf', function (req, res, next ){
    console.log(req.params)
    const db = app.get('db')
    db.getshelf([req.params.shelf]).then( response =>{
        res.status(200).send(response)
    })
})

app.get('/api/inventory/:shelf/:bin', function (req, res, next){
    console.log(req.params);
    const db = app.get('db')
    db.getitems([req.params.shelf, req.params.bin]).then ( response => {
        res.status(200).send(response)
    })
})

app.post('/api/inventory', function(req, res, next) {
    const db = app.get('db')
    console.log(req.body)
    db.newitem([ req.body.shelf, req.body.bin, req.body.name, req.body.price ]).then( response => {
        res.sendStatus(200)
    })
})

app.put('/api/inventory/:shelf/:bin', function(req, res, next){
    const db = app.get("db")
    console.log(req.params) 
    console.log(req.body) 
    db.updateitem([ req.body.name, req.body.price, req.params.shelf, req.params.bin ]).then( response => {
        res.sendStatus(200)
    } )
})

app.delete('/api/inventory/:shelf/:bin', function(req, res, next){
    const db = app.get("db")
    console.log("hello")
    db.deleteitem([ req.params.shelf, req.params.bin ]).then ( response => {
        res.sendStatus(200)
    })
    .catch(error =>{
        console.log(error)
        res.sendStatus(500)
    })
})
console.log("---== :D :O :D I'm up and running :O :D :O ==---")
const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`);});
