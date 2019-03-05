const express = require('express')
const app = express ();

app.get('/',function(req,res){
    res.send('ABCDEFGH')
})

app.listen('12345')