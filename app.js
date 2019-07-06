var express = require('express');
var chalk = require('chalk');

var app = express();

app.get('/',function(req,res){

});

app.listen(3000,()=>{
    console.log('Listenning on port '+chalk.green('3000'));
});