const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

var mysql = require('mysql2');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "Root@123", 
  database: "crud-node/react"
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  

  

});  

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.post('/task',(req,res)=> {
    console.log(req.body);
const name = req.body.name;
const description = req.body.description;
const taskID = req.body.taskID;



    var sql = "INSERT INTO task (name, description, taskID) VALUES (?, ?,?)";
    con.query(sql, [name, description, taskID], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

})

app.delete('/task',(req,res)=> {

}


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


