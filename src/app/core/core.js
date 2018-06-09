var angular = require('angular');
var footer = require('./footer/footer');

angular.module('core', []).component('footer', footer);

module.exports = 'core';
