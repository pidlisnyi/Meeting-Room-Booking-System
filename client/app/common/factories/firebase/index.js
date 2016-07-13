import angular from 'angular';
import FirebaseFactory from './firebase.factory';

let firebaseModule = angular.module('firebaseData', [])

.factory('FirebaseFactory', FirebaseFactory)

.name;

export default firebaseModule;
