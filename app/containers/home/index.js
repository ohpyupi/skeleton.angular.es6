'use strict';
import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import Controller from './controller.js';
import routes from './config.js';

export default angular.module('app.home', [uirouter])
.controller('HomeCtrl', Controller)
.config(routes)
.name;
