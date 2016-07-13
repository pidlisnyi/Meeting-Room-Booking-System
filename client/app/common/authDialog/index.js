import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authDialogComponent from './authDialog.component';

let authDialogModule = angular.module('authDialog', [
  uiRouter
])

.component('authDialog', authDialogComponent)

.name;

export default authDialogModule;
