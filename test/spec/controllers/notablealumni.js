'use strict';

describe('Controller: NotablealumniCtrl', function () {

  // load the controller's module
  beforeEach(module('hchsAlumniWebsiteAppApp'));

  var NotablealumniCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotablealumniCtrl = $controller('NotablealumniCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NotablealumniCtrl.awesomeThings.length).toBe(3);
  });
});
