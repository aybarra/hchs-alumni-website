'use strict';

describe('Controller: BoardCtrl', function () {

  // load the controller's module
  beforeEach(module('hchsAlumniWebsiteAppApp'));

  var BoardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardCtrl = $controller('BoardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
