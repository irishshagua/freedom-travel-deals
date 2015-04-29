'use strict';

angular.module('FTDeals', ['ionic', 'FTDeals.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'MenuCtrl'
    }).state('app.contacts', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html'
        }
      }
    }).state('app.deals', {
      url: '/deals',
      views: {
        'menuContent': {
          templateUrl: 'templates/deals.html',
          controller: 'DealsCtrl'
        }
      }
    }).state('app.deal', {
      url: '/deals/:dealId',
      views: {
        'menuContent': {
          templateUrl: 'templates/deal.html',
          controller: 'DealCtrl'
        }
      }
    }).state('app.comment', {
      url: '/comments/new-comment',
      views: {
        'menuContent': {
          templateUrl: 'templates/new-comment.html',
          controller: 'NewCommentCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/deals');
});
