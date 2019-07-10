const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  bookRouter.route('/')
    .get((req, res) => {
      res.render('book', {
        title: 'Books',
        nav
      });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.send(`book id: ${id} `);
    });
  return bookRouter;
}
module.exports = router;
