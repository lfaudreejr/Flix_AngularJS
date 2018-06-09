const angular = require('angular');
const popularMovies = require('./popular-movies.component.js');

const popularJSON = [
  {
    results: [
      {
        vote_count: 1821,
        id: 383498,
        video: false,
        vote_average: 7.8,
        title: 'Deadpool 2',
        popularity: 292.266544,
        poster_path: '/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
        original_language: 'en',
        original_title: 'Deadpool 2',
        genre_ids: [28, 35, 878],
        backdrop_path: '/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg',
        adult: false,
        overview:
          "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
        release_date: '2018-05-15'
      },
      {
        vote_count: 102,
        id: 351286,
        video: false,
        vote_average: 7.3,
        title: 'Jurassic World: Fallen Kingdom',
        popularity: 239.047643,
        poster_path: '/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
        original_language: 'en',
        original_title: 'Jurassic World: Fallen Kingdom',
        genre_ids: [28, 12, 878],
        backdrop_path: '/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg',
        adult: false,
        overview:
          'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
        release_date: '2018-06-06'
      }
    ]
  }
];

describe('popular-movies component', function() {
  beforeEach(function() {
    angular
      .module('popularMovies', [
        'app/movies/popular/popular-movies.template.html'
      ])
      .component('popularMovies', popularMovies);
    angular.mock.module('popularMovies');
  });

  it(
    'should render "Hello"',
    angular.mock.inject(function($rootScope, $compile, $httpBackend) {
      $httpBackend.when('GET', 'app/api/popular.json').respond(popularJSON);
      var element = $compile('<popular-movies></popular-movies>')($rootScope);
      $httpBackend.flush();
      $rootScope.$digest();
      var title = element.find('h1');
      expect(title.html().trim()).toEqual('Hello');
    })
  );
});
