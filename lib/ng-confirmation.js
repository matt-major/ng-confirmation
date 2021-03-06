/*
 The MIT License (MIT)

 Copyright (c) 2014 Matt Major

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
var module = angular.module('[app-name]', []);

module.directive('ngConfirmation', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                actionType: '@',
                actionStyle: '@',
                onConfirm: '&'
            },
            template: '<div class="actionConfirmation"><div data-ng-hide="isPending"><button type="button" class="btn btn-xs btn-{{actionStyle}}" data-ng-click="start()">{{actionType}}</button></div><div data-ng-show="isPending"><button type="button" class="btn btn-xs btn-default" data-ng-click="cancel()">Abort</button><button type="button" class="btn btn-xs btn-{{actionStyle}}" data-ng-click="confirm()">Confirm</button></div></div>',
            controller: function ($scope) {
                $scope.isPending = false;
                $scope.start = function () {
                    console.log($scope);
                    return $scope.isPending = true;
                };
                $scope.cancel = function () {
                    return $scope.isPending = false;
                };
                $scope.confirm = function () {
                    $scope.isPending = false;
                    return $scope.onConfirm();
                };
            }
        };
    });