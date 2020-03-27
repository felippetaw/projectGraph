const express = require('express');

const GraphController = require('./controllers/GraphController');

const routes = express.Router();

routes.get('/graph', GraphController.index);
routes.get('/all_options', GraphController.fixesList);
routes.post('/options', GraphController.create);

 module.exports =  routes;