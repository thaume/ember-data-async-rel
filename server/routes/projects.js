var projectsFixtures = require('./fixtures/projects.json');

module.exports = function(app) {
  var express = require('express');
  var projectsRouter = express.Router();

  // GET /api/projects
  projectsRouter.get('/', function(req, res) {
    var response = !req.query.ids ?
      projectsFixtures :
      req.query.ids.map(function(index) {
        return projectsFixtures.filter(function(project) {
          project.participantsCount = project.participants.length;
          return project.id === index;
        })[0];
      });

    res.send({
      projects: response
    });
  });

  // GET /api/projects/:id
  projectsRouter.get('/:id', function(req, res) {
    res.send({
      projects: projectsFixtures.filter(function(project) {
        project.participantsCount = project.participants.length;
        return project.id === req.param('id');
      })
    });
  });

  // POST /api/projects
  projectsRouter.post('/', function(req, res) {
    req.body.project.id = 8;
    res.send(req.body);
  });

  // PUT /api/projects/:id
  projectsRouter.put('/:id', function(req, res) {
    res.send(req.body);
  });

  app.use('/api/projects', projectsRouter);
};
