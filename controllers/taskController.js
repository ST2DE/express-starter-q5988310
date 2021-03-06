var db = require('../models');
var Task = db.Task;

let taskController = {
  index: function (req, res) {
    if(!req.session.user_id) {
  		res.redirect('/');
    }else {
      Task.findAll()
        .then(function (tasks) {
         res.render('index', {"tasks": tasks});
       });
    }
  },
  indexApi: function (req, res) {
    Task.findAll()
      .then(function (tasks) {
        res.json(tasks);
      });
  },
  addTask: function(req,res){
    let newTask = {
      title: req.body.task
    };
    Task.create(newTask);
    res.redirect('/tasks');
  },  
  deleteTask: function(req,res){
    if(!req.session.user_id) {
  		res.redirect('/');
    }else {
      let id = req.query.id;
      Task.destroy({
        where: {
          id:id
        }
      })
      .then(function(){
        res.redirect('/tasks');
      })    
    }    
  }
};
module.exports = taskController;