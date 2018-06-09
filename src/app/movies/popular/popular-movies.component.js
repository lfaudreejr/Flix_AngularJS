module.exports = {
  template: require('./popular-movies.template.html'),
  controller: ['$http', PopularMoviesController]
};

function PopularMoviesController($http) {
  var self = this;
  var startIndex = 0;
  var lastIndex = 5;

  $http.get('app/api/popular.json').then(function (response) {
    self.popularMovies = response.data.results;
    for (var i = 0; i < 5; i++) {
      self.mediator.push(self.popularMovies[i]);
    }
  });

  this.mediator = [];

  this.leftClick = function () {
    if (startIndex === 0) {
      startIndex = this.popularMovies.length - 1;
      lastIndex--;
      this.mediator.unshift(this.popularMovies[this.popularMovies.length - 1]);
      this.mediator.pop();
    } else if (lastIndex === 0) {
      lastIndex = this.popularMovies.length - 1;
      startIndex--;
      this.mediator.unshift(this.popularMovies[startIndex]);
      this.mediator.pop();
    } else {
      startIndex--;
      lastIndex--;
      this.mediator.unshift(this.popularMovies[startIndex]);
      this.mediator.pop();
    }
    return;
  };

  this.rightClick = function () {
    if (lastIndex === this.popularMovies.length - 1) {
      lastIndex = 0;
      startIndex++;
      this.mediator.shift();
      this.mediator.push(this.popularMovies[0]);
    } else if (startIndex === this.popularMovies.length - 1) {
      startIndex = 0;
      lastIndex++;
      this.mediator.shift();
      this.mediator.push(this.popularMovies[lastIndex]);
    } else {
      startIndex++;
      lastIndex++;
      this.mediator.shift();
      this.mediator.push(this.popularMovies[lastIndex]);
    }
    return;
  };
}
