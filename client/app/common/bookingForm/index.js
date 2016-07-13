import angular              from 'angular';
import uiRouter             from 'angular-ui-router';
import bookingFormComponent from './bookingForm.component';

let bookingFormModule = angular.module('bookingForm', [
  uiRouter
])

.component('bookingForm', bookingFormComponent)

.name;

export default bookingFormModule;
