const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql')
var connInfo = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "jain410",
    database: "readyassist"
}
var connection = mysql.createConnection(connInfo);


//showing the employees &filtering the salary of employees & id

app.get('/employees', (req, res) => {
    let sql = 'select * from employees';
    if(req.query.salary) { sql = sql + ' where salary = ' + req.query.salary}
    if(req.query.id) { sql = sql + ' where id = ' + req.query.id} 
    connection.query (sql, function(err, data){
    if(err) throw err;
    let response = { data: data }
     res.send(response);
    })
    });


// showing the candidates and filtering the id

    app.get('/candidates', (req, res) => {
    let sql = 'select * from candidates';
    if(req.query.id) { sql = sql + ' where id = ' + req.query.id}
    connection.query(sql, function(err, data){
    if(err) throw err;
    let response = { data: data }
     res.send(response);
    })
    });

app.listen(port, () => {
    console.log("ready to start...")
});