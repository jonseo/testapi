var fs = require('fs');

// Establish data
var pokeData = fs.readFileSync('poke2.json');
var poke = JSON.parse(pokeData);
var colorData = fs.readFileSync('colors.json');
var color = JSON.parse(colorData)

// deal with dependencies etc
const express = require("express");
const app = express();
const cors=require('cors');
const { type } = require('os');
app.listen(process.env.PORT, 

  () => console.log("Server Start at the Port")

);
app.use(express.static('public'));
app.use(cors());

console.log(typeof {color})
console.log(typeof {poke})

// Poke request and serve
app.get('/poke', pokeDataf);
function pokeDataf(request, response) {
      
  response.send(poke);

}

// Color request and serve
app.get('/colors', colorDataf);
function colorDataf(request, response) {

  response.send(color)

}

app.get('/all', allDataf);
function allDataf(request, response) {

  response.send({color} + " " + {poke})

}