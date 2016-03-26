/**
 * Created by wizdev on 3/20/2016.
 */
(function(define, angular){
    "use strict";
    var _rootPath = 'client/components/';
    function codeArea($http) {
        return {
            restrict: 'AE',
            templateUrl: _rootPath+'code-area/templates/code-area.html',
            link: function ($scope, element, attr, ctrl, transclude) {
                /*var editor = ace.edit("editor");
                editor.setTheme("ace/theme/monokai");
                editor.getSession().setMode("ace/mode/javascript");
                document.getElementById('editor').style.fontSize='16px';*/
            }
        }
    }

    var _codeArea = 'goLive.codeArea';
    angular
        .module(_codeArea, [])
        .directive('codeArea', ['$http', codeArea])
})(window.define, window.angular);