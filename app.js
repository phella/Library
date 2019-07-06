var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan')

var app = express();
app.use(morgan('tiny'));

app.get('/',function(req,res){
    res.sendFile('hello');
    debug('new visitor');
});

app.listen(3000,()=>{
    // Prints in debug mode only
    debug(`Listenning on port ${chalk.green('3000')}`);
});