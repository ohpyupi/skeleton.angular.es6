'use strict';
import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import AppContainer from './containers';
import AppFilter from './filters';
import AppComponent from './components';

import Config from './app.config';
angular.module('app', [
uirouter,
AppContainer,
AppFilter,
AppComponent,
])
.config(Config);
