'use strict';

describe('Controller: MembershipcategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('hchsAlumniWebsiteAppApp'));

  var MembershipcategoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembershipcategoriesCtrl = $controller('MembershipcategoriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MembershipcategoriesCtrl.awesomeThings.length).toBe(3);
  });
});
