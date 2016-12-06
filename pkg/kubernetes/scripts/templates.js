/*
 * This file is part of Cockpit.
 *
 * Vanlos Wang vanloswang@126.com
 *
 * Cockpit is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * Cockpit is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Cockpit; If not, see <http://www.gnu.org/licenses/>.
 */

 (function() {
    "use strict";

    var angular = require('angular');
    require('angular-route');

    require('./date');
    require('./dialog');
    require('./listing');
    require('./kube-client');
    require('./utils');

    require('../views/templates-page.html');

    var VOLUME_FACTORY_SUFFIX = "TemplateFields";

    angular.module('kubernetes.templates', [
        'ngRoute',
        'kubeClient',
        'kubernetes.date',
        'kubernetes.listing',
        'ui.cockpit',
        ])

    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
            .when('/templates', {
                templateUrl: 'views/templates-page.html',
                controller: 'TemplateCtrl'
            });
        }
        ])

    /*
     * The controller for the templates view.
     */
     .controller('TemplateCtrl', [
        '$scope',
        'kubeLoader',
        'kubeSelect',
        'ListingState',
        'filterService',
        '$location',
        '$timeout',
        function($scope, loader, select,  ListingState, filterService,
            $location, actions, $timeout) {

            $scope.listing = new ListingState($scope);

            /* All the actions available on the $scope */
            angular.extend($scope, actions);

            $scope.$on("activate", function(ev, id) {
                ev.preventDefault();
                $location.path('/templates/' + id);
            });
        }
        ]);

}());
