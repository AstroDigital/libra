/* global multiDownload */

'use strict';

/**
 * @ngdoc function
 * @name dauriaSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dauriaSearchApp
 */
angular.module('dauriaSearchApp')
  .controller('AdvancedCtrl', ['$scope', '$filter', 'selectedResult', function($scope, $filter, selectedResult) {

    $scope.bandPrefill = function (array) {
      jQuery('.band-selection input').each(function(){
        jQuery(this).prop('checked',false);
      });
      for (var i=0; i < array.length; i++) {
        jQuery('#band-' + array[i]).prop('checked',true);
      }
    };

    $scope.downloadBands = function () {
      var bands = [];
      jQuery('.band-selection input').each(function(){
        if(jQuery(this).prop('checked') === true){
          bands.push(jQuery(this).attr('value').replace('band-',''));
        }
      });
      var urls = bands.map(function(band){
        return 'https://landsat-pds.s3.amazonaws.com/L8/' + zeroPad(selectedResult.path,3) + '/' + zeroPad(selectedResult.row,3) + '/' + selectedResult.sceneID + '/' + selectedResult.sceneID + '_B' + band + '.TIF';
      });
      multiDownload(urls);
    };

    function zeroPad(n,c) {
      var s = String(n);
      if (s.length < c) {
        return zeroPad('0' + n,c);
      }
      else {
        return s;
      }
    }

  }]);
