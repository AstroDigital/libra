'use strict';

angular.module('dauriaSearchApp').filter('suffix', [ function () {
  return function (input, choice) {
    var suffix;
    switch (choice) {
      case 'per':
        suffix = '%';
        break;
      case 'deg':
        suffix = '\xB0';
        break;
    }
    return input + suffix;
  };
}]);
