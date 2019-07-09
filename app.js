/* eslint-disable linebreak-style */
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

bookRouter.route('/books')
  .get((req, res) => {
    res.send('Many books');
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('One books');
  });

app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Library',
    nav:
      [{ link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }]
  });
  debug('new visitor');
});

app.listen(port, () => {
  // Prints in debug mode only
  debug(`Listenning on port ${chalk.green(port)}`);
});
