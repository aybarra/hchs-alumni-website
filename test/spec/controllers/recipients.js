'use strict';

describe('Controller: RecipientsCtrl', function () {

  // load the controller's module
  beforeEach(module('hchsAlumniWebsiteAppApp'));

  var RecipientsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipientsCtrl = $controller('RecipientsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecipientsCtrl.awesomeThings.length).toBe(3);
  });
});
