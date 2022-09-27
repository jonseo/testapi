var fs = require('fs');

// Establish data
var pokeDataj = fs.readFileSync('poke2.json');
var poke = JSON.parse(pokeDataj);

var colorDataj = fs.readFileSync('colors.json');
var color = JSON.parse(colorDataj)

var ammoDataj = fs.readFileSync('ammo.json');
var ammo = JSON.parse(ammoDataj)

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

app.get('/ammo', ammoDataf);
function ammoDataf(request, response) {
  response.send(ammo)
}

app.get('/all', allDataf);
function allDataf(request, response) {
  response.send([color, poke])     
}