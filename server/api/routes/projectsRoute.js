'use strict';
module.exports = function(app) {
  var projects = require('../controllers/projectsController');

  // todoList Routes
  app.route('/projects')
    .get(projects.list_all_projects)
    .post(projects.create_a_project);

}
