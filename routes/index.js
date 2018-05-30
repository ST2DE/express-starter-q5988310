const taskController = require('../controllers/taskController.js');
const userController = require('../controllers/userController.js');



module.exports = function (app) {

  app.get('/tasks', taskController.index);
  app.get('/api/tasks', taskController.indexApi);
  app.get('/',userController.loginPage);
 // app.get('/register',userController.registerPage);
  app.get('/tasks/delete/', taskController.deleteTask);   
  
  app.post('/addTask', taskController.addTask);
  app.post('/register',userController.register);
  app.post('/login',userController.login);
  app.post('/logout', userController.logout);
  //app.post('/tasks/edit/', taskController.editTask); 

};