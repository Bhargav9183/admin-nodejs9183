const sql = require('mysql');

const db = sql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'sql-2'
});
db?console.log('db conneted'):console.log('db conect in error');

module.exports = db;