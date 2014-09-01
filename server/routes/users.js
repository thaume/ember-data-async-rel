var usersFixtures = require('./fixtures/users.json');

module.exports = function(app) {
  var express = require('express');
  var userRouter = express.Router();

  // GET /users
  userRouter.get('/', function(req, res) {
    res.send({
      users: usersFixtures
    })
  });

  // GET /users/:id
  userRouter.get('/:id', function(req, res) {
    res.send({
      user: usersFixtures.filter(function(user) {
        return user.id === req.param('id');
      })[0]
    });
  });

  // PUT /api/users/:id
  userRouter.put('/:id', function(req, res) {
    req.body.user.id = 1;
    res.send(req.body);
  });

  app.use('/api/users', userRouter);
};
