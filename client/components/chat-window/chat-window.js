/**
 * Created by wizdev on 7/11/2015.
 */
(function(define, angular){
    "use strict";
    var _chat = 'goLive.chat';
    var _rootPath = 'client/components/';

    angular
        .module(_chat, [])
        .directive('chat', function () {
            return {
                restrict: 'AE',
                template: '<div><div chat-window ng-show="openChat"></div><div chat-icon></div></div>'
            }
        })
        .directive('chatSlimScroll', ['$http', '$timeout', function ($http, $timeout) {
            return {
                restrict: 'AE',
                link: function (scope, element) {}
            }
        }])
        .directive('chatWindow', ['$http', function ($http) {
            return {
                restrict: 'AE',
                templateUrl: _rootPath+'chat-window/templates/chat-window.html'
            }
        }])
        .directive('chatIcon', function ($http) {
            return {
                restrict: 'AE',
                template: '<div id="small-chat" ng-click="openChat = !openChat"><span class="badge badge-warning pull-right">5</span><a class="open-small-chat"><i class="fa fa-comments"></i></a></div>',
                link: function ($scope, element, attr, ctrl, transclude) {}
            }
        })
})(window.define, window.angular);