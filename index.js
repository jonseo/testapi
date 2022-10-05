var fs = require('fs');

// Establish data
var pokeDataj = fs.readFileSync('poke2.json');
var poke = JSON.parse(pokeDataj);

var colorDataj = fs.readFileSync('colors.json');
var color = JSON.parse(colorDataj)

var ammoDataj = fs.readFileSync('ammo.json');
var ammo = JSON.parse(ammoDataj)

var treestand = fs.readFileSync('treestand.json')
var tree = JSON.parse(treestand)

var jacketData = fs.readFileSync('jacket.json')
var jacket = JSON.parse(jacketData)

// deal with dependencies etc
const express = require("express");
const app = express();
app.use(express.json());
const cors=require('cors');
app.listen(process.env.PORT, 
  () => console.log("Server Start at the Port")
);
app.use(express.static('public'));
app.use(cors());

// Poke post
app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Thing created successfully!'
  });
});

// Poke request and serve
app.get('/poke', pokeDataf);
function pokeDataf(request, response) {
  response.send(poke);
}

app.get('/colors', colorDataf);
function colorDataf(request, response) {
  response.send(color)
}

app.get('/all', allDataf);
function allDataf(request, response) {
  response.send([color, poke, ammo])     
}

// all ammo endpoints

app.get('/ammo', ammoDataf)
function ammoDataf(request, response){
  response.send(ammo)
}

app.get('/ammo-10', LammoDataf)
function LammoDataf(request, response){
  var Lammo = ammo.slice(0, 9)
  response.send(Lammo)
}

app.get('/ammo-20', LammoDataf)
function LammoDataf(request, response){
  var Lammo = ammo.slice(10, 19)
  response.send(Lammo)
}

app.get('/ammo-30', LammoDataf)
function LammoDataf(request, response){
  var Lammo = ammo.slice(20, 29)
  response.send(Lammo)
}

app.get("/treestand", treeData)
function treeData(request, response){
  response.send(tree)
}

app.get("/jacket", jacketFunc)
function jacketFunc(request, response){
  response.send(jacket)
}