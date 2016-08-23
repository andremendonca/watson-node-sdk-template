/*********************************************************************
*
*  routes/index
*  routes initialization file
*
*********************************************************************/

var applicationController = require('../controllers/application');
module.exports = {
  init: function (app) {
    // initializing module routes
    app.get('/', applicationController.root);
    require('./yourmodule')(app);
  }
};
