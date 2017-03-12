'use strict';

describe('Controller: ScholarshipoverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('hchsAlumniWebsiteAppApp'));

  var ScholarshipoverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScholarshipoverviewCtrl = $controller('ScholarshipoverviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScholarshipoverviewCtrl.awesomeThings.length).toBe(3);
  });
});
