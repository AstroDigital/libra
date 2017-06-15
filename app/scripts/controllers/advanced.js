/* global multiDownload moment*/

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
      // AWS maintains different urls for pre collection 1
      var collectionOneSwapDate = moment('2017-05-01', 'YYYY-MM-DD')
      var urls = bands.map(function(band){
        if (moment(selectedResult.acquisitionDate, 'YYYY-MM-DD') < collectionOneSwapDate) {
          // replacing everything with revision 00 gets AWS bands more reliably
          return 'https://landsat-pds.s3.amazonaws.com/L8/' + zeroPad(selectedResult.path,3) + '/' + zeroPad(selectedResult.row,3) + '/' + selectedResult.sceneID.slice(0, -2) + '00/' + selectedResult.sceneID.slice(0, -2) + '00_B' + band + '.TIF';
        } else {
          return 'https://landsat-pds.s3.amazonaws.com/c1/L8/' + zeroPad(selectedResult.path,3) + '/' + zeroPad(selectedResult.row,3) + '/' + selectedResult.product_id + '/' + selectedResult.product_id + '_B' + band + '.TIF';
        }

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
