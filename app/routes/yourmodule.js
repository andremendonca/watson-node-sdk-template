/*********************************************************************
*
*  routes/yourmodule/module
*  routes definition for your module
*
*********************************************************************/

var controller = require('../controllers/yourmodule');

module.exports = function (app) {
  app.get('/api/yourmodule', controller.list);
  app.get('/api/yourmodule/:id', controller.retrieve);
  app.post('/api/yourmodule', controller.create);
  app.put('/api/yourmodule', controller.update);
  app.delete('/api/yourmodule', controller.delete);
};
