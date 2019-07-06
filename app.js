var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var app = express();

app.get('/',function(req,res){

});

app.listen(3000,()=>{
    // Prints in debug mode only
    debug(`Listenning on port ${chalk.green('3000')}`);
});