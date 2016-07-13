import angular         from 'angular';
import Navbar          from './navbar';
import User            from './user/user';
import AuthDialog      from './authDialog';
import FirebaseFactory from './factories/firebase';
import LocalForageFactory from './factories/localForage';
import BookingForm     from './bookingForm';

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  AuthDialog,
  FirebaseFactory,
  LocalForageFactory,
  BookingForm
])

.name;

export default commonModule;
