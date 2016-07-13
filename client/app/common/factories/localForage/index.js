import angular from 'angular';
import localForage from './localForage.factory';

let localForageModule = angular.module('localForage', [])

.factory('localForageFactory', localForage)

.name;

export default localForageModule;
