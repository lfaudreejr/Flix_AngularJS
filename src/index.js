var angular = require('angular');

var techsModule = require('./app/techs/index');

var main = require('./app/main/main');
var header = require('./app/navbar/header');
var title = require('./app/jumbotron/title');
var core = require('./app/core/core');
var moviesModule = require('./app/movies/movies.module');

require('./index.scss');

angular
  .module('app', [techsModule, moviesModule, core])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title);
