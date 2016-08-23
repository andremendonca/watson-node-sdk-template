'use strict';

// security.js
var rateLimit  = require('express-rate-limit'),
  csrf         = require('csurf'),
  session      = require('express-session'),
  cookieParser = require('cookie-parser'),
  helmet       = require('helmet');

var passport = require('passport');
module.exports = function (app) {
  app.enable('trust proxy');

  // 1. helmet with defaults
  app.use(helmet({ cacheControl: false }));

  // 2. rate-limit to /api/
  app.use('/api/', rateLimit({
    windowMs: 60 * 1000, // seconds
    delayMs: 0,
    max: 5
  }));

  // 3. setup cookies
  var secret = 'ggdnipai1can4bm89qkt9';
  var cookieSettings = { secure: false };
  if (process.env.VCAP_APPLICATION) cookieSettings.secure = true;
  app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: cookieSettings
  }));
  app.use(cookieParser(secret));
  app.use(passport.initialize());
  app.use(passport.session());


  // 4. csrf
  var csrfProtection = csrf({ cookie: true });
  app.get('/', csrfProtection, function(req, res, next) {
    req._csrfToken = req.csrfToken();
    next();
  });
};
