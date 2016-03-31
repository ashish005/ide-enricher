/**
 * Created by wizdev on 3/27/2016.
 */
(function(define, angular){
    "use strict";
    var _rootPath = 'client/components/';
    function ideConsole() {
        return {
            restrict: 'AE',
            templateUrl: _rootPath+'console/templates/console.html',
            link: function ($scope, element, attr, ctrl, transclude) {
            }
        }
    };

    var _codeConsole = 'goLive.console';
    angular
        .module(_codeConsole, [])
        .directive('ideConsole', ideConsole)
})(window.define, window.angular);