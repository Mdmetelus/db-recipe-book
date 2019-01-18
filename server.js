const express = require('express');
const helmet = require('helmet');
const server = express();
const recipesR = require("./allRoutes/recipesR");
const dishesR = require("./allRoutes/dishesR ");
const db = require("./data/helpers/dataAccessFunct");


server.use(express.json());
server.use(helmet());

server.use('/api/recipes', recipesR);
server.use('/api/dishes', dishesR);


//routes
server.get('/', (req, res) => {
  res.send(`API working.\n Sanity Check\n Test Route!`);
});



module.exports = server;