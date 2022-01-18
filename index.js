const express = require('express');
const app = express();
const path = require('path');


app.set('port', process.env.PORT || 3000);

app.get('/', (req, res)=> {
    res.send('hello worldseaseasea')

});

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
 
 });