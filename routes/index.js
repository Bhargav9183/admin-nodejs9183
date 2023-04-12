const express = require('express');
const routes = express.Router();
const conroller = require('../conroller/modelcontroller')

routes.get('/',conroller.home);
routes.post('/insertData',conroller.insertDATA);
routes.get('/delete/:id',conroller.deleteDATA)


module.exports = routes