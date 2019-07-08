/* eslint-disable linebreak-style */
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('tiny'));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
  debug('new visitor');
});

app.listen(3000, () => {
  // Prints in debug mode only
  debug(`Listenning on port ${chalk.green('3000')}`);
});
