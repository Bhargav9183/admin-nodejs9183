const express = require('express');
const app = express();
const db = require('./config/mysql')
const shuffle = require('shuffle-array');
const csprng = require('random-number-csprng');
app.use(express.urlencoded());
app.set('view engine', 'ejs');

app.use('/',require('./routes'))
app.listen(3030);