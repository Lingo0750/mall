var mysql =require('mysql');
var connection =mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'book',
    connectionLimit:15
})

module.exports=connection;