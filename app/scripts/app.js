'use strict';

/**
 * @ngdoc overview
 * @name hchsAlumniWebsiteAppApp
 * @description
 * # hchsAlumniWebsiteAppApp
 *
 * Main module of the application.
 */
angular
  .module('hchsAlumniWebsiteAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/purpose', {
        templateUrl: 'views/purpose.html',
        controller: 'PurposeCtrl',
        controllerAs: 'purpose'
      })
      .when('/board', {
        templateUrl: 'views/board.html',
        controller: 'BoardCtrl',
        controllerAs: 'board'
      })
      .when('/bylaws', {
        templateUrl: 'views/bylaws.html',
        controller: 'BylawsCtrl',
        controllerAs: 'bylaws'
      })
      .when('/newsletter', {
        templateUrl: 'views/newsletter.html',
        controller: 'NewsletterCtrl',
        controllerAs: 'newsletter'
      })
      .when('/notableAlumni', {
        templateUrl: 'views/notablealumni.html',
        controller: 'NotablealumniCtrl',
        controllerAs: 'notableAlumni'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/membershipCategories', {
        templateUrl: 'views/membershipcategories.html',
        controller: 'MembershipcategoriesCtrl',
        controllerAs: 'membershipCategories'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl',
        controllerAs: 'join'
      })
      .when('/scholarshipOverview', {
        templateUrl: 'views/scholarshipoverview.html',
        controller: 'ScholarshipoverviewCtrl',
        controllerAs: 'scholarshipOverview'
      })
      .when('/submit', {
        templateUrl: 'views/submit.html',
        controller: 'SubmitCtrl',
        controllerAs: 'submit'
      })
      .when('/recipients', {
        templateUrl: 'views/recipients.html',
        controller: 'RecipientsCtrl',
        controllerAs: 'recipients'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  });
