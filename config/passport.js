var passport = require('passport');
var _ = require('lodash');

module.exports = function (app) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  // register passport strategies
  var strategies = require('../app/auth/strategies');
  _.forEach(strategies, function (strategy) {
    passport.use(strategy);
  });
}
