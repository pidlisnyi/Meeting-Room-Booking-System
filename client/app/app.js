import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import ngAria       from 'angular-aria';
import ngAnimate    from 'angular-animate';
import ngMessages   from 'angular-messages';
import ngMaterial   from 'angular-material';
import Common       from './common/common';
import Components   from './components/components';
import AppComponent from './app.component';

import '../../bower_components/angular-material-datetimepicker/js/angular-material-datetimepicker';
import '../../bower_components/angular-material-datetimepicker/css/material-datetimepicker.css';



import 'angular-bootstrap-calendar';
import '../../node_modules/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.css';
import 'firebase/lib/firebase-web';

import firebase from 'angularfire';

import 'normalize.css';
import '../../node_modules/angular-material/angular-material.css';

angular.module('app', [
  uiRouter,
  ngAria,
  ngAnimate,
  ngMessages,
  ngMaterial,
  Common,
  Components,
  'mwl.calendar',
  firebase,
  'ngMaterialDatePicker'
  ])
  .config(($mdThemingProvider, $mdIconProvider) => {
    "ngInject";

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('blue-grey');

    $mdIconProvider
      .icon('menu', 'assets/icons/ic_menu_black_48px.svg', 48)
      .icon('close', 'assets/icons/ic_close_black_24px.svg', 24)
  })
  .constant('API', {
    'URL': 'https://meeting-room-booking.firebaseio.com/events',
    'REF': new Firebase('https://meeting-room-booking.firebaseio.com/events')
  })

  .component('app', AppComponent);
