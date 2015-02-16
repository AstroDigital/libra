/* global getJSONFixture */
'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dauriaSearchApp'));

  var MainCtrl;
  var scope;
  var httpBackend;
  var userLocationHandler;
  var landsatAPIHandler;
  
  // Check if it's a call to our Landsat API
  var isAPIURL = function (url) {
      return (url.slice(0,36) === 'http://api.developmentseed.com:8000/');
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    // Set location of base fixtures location
    jasmine.getJSONFixtures().fixturesPath='base/test/mock';

    // Mock for user location call
    userLocationHandler = httpBackend.whenGET('https://vast-coast-1838.herokuapp.com/location').
      respond([{
        location: {
          lat: 40.23,
          lon: 87.23
        }
    }]);   

    // Mock for Landsat API call
    landsatAPIHandler = httpBackend.whenGET(isAPIURL).
      respond(getJSONFixture('landsatAPI.json'));
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should start with initial defaults', function () {
    expect(scope.results.length).toEqual(0);
    expect(scope.cloudCoverageMin).toEqual(0);
    expect(scope.cloudCoverageMax).toEqual(20);
    expect(scope.sunAzimuthMin).toEqual(0);
    expect(scope.sunAzimuthMax).toEqual(180);
    expect(scope.sortField).toEqual('acquisitionDate');
    httpBackend.flush();
  });

  it('should make a call to get user location', function () {
    httpBackend.expectGET('https://vast-coast-1838.herokuapp.com/location');
    httpBackend.flush();
  });

  it('should make a call to api server', function () {
    httpBackend.expectGET(isAPIURL);
    httpBackend.flush();
  });  


});
