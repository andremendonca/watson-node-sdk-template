/*********************************************************************
 *
 *  controllers/application
 *  controller implementation for module
 *
 *********************************************************************/

module.exports = {
  root: function (req, res) {
    res.render('index', { csrfToken: req._csrfToken, });
  }
};
