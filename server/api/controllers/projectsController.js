'use strict';

var mongoose = require('mongoose'),
  Project = mongoose.model('Projects');


exports.list_projects = function(req, res) {
    Project.find({ }, function(err, project) {
    if (err)
      res.send(err);
      setTimeout(()=>{
        res.json(project);      
      }, 1000)
  }).limit(parseInt(req.params.amount,10));
};

exports.list_all_projects = function(req, res) {
    Project.find({}, function(err, project) {
    if (err)
      res.send(err);
      setTimeout(()=>{
        res.json(project);      
      }, 1000)
  });
};

exports.create_a_project = function(req, res) {
  var new_project = new Project(req.body);
  new_project.save(function(err, project) {
    if (err)
      res.status(406).send(err);

    res.status(200).json(project)
  });
};
