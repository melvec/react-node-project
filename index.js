const express = require('express');
const app = express();
const path = require('path');

var mysql = require('mysql2');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "Root@123"  
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  




app.set('port', process.env.PORT || 3000);

app.get('/task', (req, res)=> {
    res.send('haha')

    const sqlSelect = "SELECT * FROM task"
    con.query(sqlSelect, (err, result)=> {
        console.log(result)
    })

});

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
 
 });


