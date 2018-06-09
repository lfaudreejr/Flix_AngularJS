const angular = require('angular');

const popularMovies = require('./popular/popular-movies.component.js');

angular.module('movies', []).component('popularMovies', popularMovies);

module.exports = 'movies';
