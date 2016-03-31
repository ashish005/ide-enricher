/**
 * Created by wizdev on 3/19/2016.
 */
(function () {
    var appName = 'goLive';
    window['name'] = appName;

    var app = angular.module(appName, [ 'ngRoute', appName+'.chat', appName+'.codeArea', appName+'.tree', appName+'.console']);
    var _rootPath = 'client/';

    function config($routeProvider, coreTemplateUrl, appTemplateUrl) {
        $routeProvider
            .when('/login', coreTemplateUrl['login'])
            .when('/register', coreTemplateUrl['register'])
            .when('/forgot_password', coreTemplateUrl['forgot_password'])
            .when('/lockscreen', coreTemplateUrl['lockscreen'])
            .when('/400', coreTemplateUrl['400'])
            .when('/500', coreTemplateUrl['500'])
            .when('/home', appTemplateUrl['home'])
            .otherwise({redirectTo: '/home'});
    }
    function angularHelper( $controllerProvider, $provide, $compileProvider ) {
        // Let's keep the older references.
        app._controller = app.controller;
        app._service = app.service;
        app._factory = app.factory;
        app._value = app.value;
        app._directive = app.directive;

        // Provider-based controller.
        app.controller = function( name, constructor ) {
            $controllerProvider.register( name, constructor );
            return(this);
        };

        // Provider-based service.
        app.service = function( name, constructor ) {
            $provide.service( name, constructor );
            return(this);
        };

        // Provider-based factory.
        app.factory = function( name, factory ) {
            $provide.factory( name, factory );
            return(this);
        };

        // Provider-based value.
        app.value = function( name, value ) {
            $provide.value( name, value );
            return(this);
        };
        // Provider-based directive.
        app.directive = function( name, factory ) {
            $compileProvider.directive( name, factory );
            return(this);
        };
    }

    function ideController($scope){
        $scope.nodeInfo = function(data){
            var editor = ace.edit("editor");
            editor.session.setValue(data)
            editor.on("guttermousedown", function(e){
                var target = e.domEvent.target;
                if (target.className.indexOf("ace_gutter-cell") == -1)
                    return;
                if (!editor.isFocused())
                    return;
                if (e.clientX > 25 + target.getBoundingClientRect().left)
                    return;

                var row = e.getDocumentPosition().row;
                e.editor.session.setBreakpoint(row);
                e.stop();
            });
            //console.log(data);
        }
    };

    app
        .config(angularHelper)
        .config(['$routeProvider', 'coreTemplateUrl', 'appTemplateUrl', config])
        .directive('ideHeader', ['$http', function ($http) {
            return {
                restrict: 'AE',
                templateUrl: _rootPath+'core/templates/header.html',
                link: function (scope, elem) {

                    elem.find('#cssmenu ul').on('click', 'li a', function(e){
                        var _case = e.currentTarget.firstChild.getAttribute('case');
                        var _key = e.currentTarget.firstChild.getAttribute('key');
                        var _ideTEmp = 'client/enricher-ide/';
                        var menuItems = {
                          1:{
                              'new-project':{title: "", draggable: true, content:_ideTEmp + 'file/new-project.html'},
                              'new':{ title: "", draggable: true, width: "250px", height: "250px", content:_ideTEmp + 'file/new.html'},
                              'open':{ title: "", draggable: true, width: "500px", height: "480px", content:_ideTEmp + 'file/open.html'},
                              'open-url':{ title: "", draggable: true, content:_ideTEmp + 'file/open-url.html'},
                              'save-as':{ title: "", draggable: true, content:_ideTEmp + 'file/save-as.html'},
                              'reopen-project':{ title: "", draggable: true, content:_ideTEmp + 'file/reopen-project.html'},
                              'rename-project':{ title: "", draggable: true, content:_ideTEmp + 'file/rename-project.html'}
                          }
                        };
                        var _caseEvent = {
                            1:{
                                exec :openIdeWindow
                            },
                            2:{},
                            3:{},
                            4:{}
                        }
                        if(_case && _case>0 && _caseEvent[_case] && typeof _caseEvent[_case].exec ==="function"){
                            _caseEvent[_case].exec(_key, menuItems[_case]);
                        }

                        /*var menu = $(this).next('ul');
                        if (hasMenuCss == 'open') {
                            menu.removeClass('open');
                        } else {
                            menu.className = 'open';
                        }*/

                        function openIdeWindow(key, info){
                          $('#ideWindow').ideWindow(info[key]);
                            var dialog = $("#ideWindow").data("ideWindow");
                            dialog.center().open();
                        }
                    });

                    elem.find('#run_ideCode').on('click', 'a', function(e) {
                        var worker = new Worker('client/components/ace/build/src/run-ide-editorcode.js');
                        var editor = ace.edit("editor");
                        var code = editor.getValue();
                        // This is basically the previous code block in string form

                        // prepare the string into an executable blob
                        var bb = new Blob([code], {
                            type: 'text/javascript'
                        });

                        // convert the blob into a pseudo URL
                        var bbURL = URL.createObjectURL(bb);

                        // Prepare the worker to run the code
                        var worker = new Worker(bbURL);

                        // add a listener for messages from the Worker
                        worker.addEventListener('message', function(e){
                            var string = (e.data).toString();
                            this.$el.find('.console').append('<p>' + string + '</p>');
                        }.bind(this));

                        // add a listener for errors from the Worker
                        worker.addEventListener('error', function(e){
                            var string = (e.message).toString();
                            that.$el.find('.console').append('<p> ERROR: ' + string + '</p>');
                        });

                        // Finally, actually start the worker
                        worker.postMessage('start');

                        // Put a timeout on the worker to automatically kill the worker
                        setTimeout(function(){
                            worker.terminate();
                            worker = null;
                        }, 10000);
                    });
                },
                controller:function($scope){
                    $http({method: 'GET', url: 'database/ide/menu.json'}).then(function (resp){
                        $scope.menuInfo = resp['data'];
                    },function (error) {
                        throw new Error('Config file has error : ' + error);
                    });
                }
            };
        }])
        .directive('ideSplitter',function(){
            return {
                restrict: 'AE',
                link: function (scope, elem, attrs) {
                    var outerSplitter = elem.ideSplitter({
                        orientation: "horizontal",
                        resize: function(e){
                            var h = elem.find(".k-pane")[0].scrollHeight;
                            $('.k-pane').height(h);
                            $('.k-splitbar').height(h);
                        },
                        panes: [
                            { collapsible: true, resizable: true, size: "20%" },
                            { collapsible: true, resizable: true },
                            { collapsible: true, resizable: true, size: "20%" }
                        ]
                    }).data('kendoSplitter');
                    var pageHeight = $("#page-wrapper").height();
                    function resizeSplitter() {
                        elem.height(pageHeight);
                        elem.resize();
                    }

                    resizeSplitter();
                    //browserWindow.resize(resizeSplitter);
                },
                controller:function($scope){}
            };
        })
        .controller('ideController', ideController)
        .run(['$rootScope', function($rootScope) {
                $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {});
                $rootScope.$on('$routeChangeSuccess', function (event, nextRoute, currentRoute) {});
                $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {});
                $rootScope.$on('$viewContentLoaded', function () {});
            }]);

    angular.element(document).ready(function () {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");
        $http({method: 'GET', url: 'client/routers.json'}).then(function (resp)
        {
            app.constant('appTemplateUrl', resp['data']['appTemplateUrl']);
            app.constant('coreTemplateUrl', resp['data']['coreTemplateUrl']);
            document.body.innerHTML='<div><div ide-header></div><div ng-view ng-controller="ideController"></div><div chat></div></div>';
            angular.bootstrap(document, [appName]);
        }, function (error) {
            throw new Error('Config file has error : ' + error);
        });
    });
    return;
})();