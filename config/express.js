'use strict';

// Module dependencies
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var busboy = require('connect-busboy');

module.exports = function (app) {
  // Configure Express
	app.set('views', path.join(__dirname, '../app/views'));
	app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(bodyParser.json({}));
  app.use(morgan('combined'))
  app.use(busboy());

  // Setup static public directory
	app.use(express.static(path.join(__dirname, '../app/public')));
};
