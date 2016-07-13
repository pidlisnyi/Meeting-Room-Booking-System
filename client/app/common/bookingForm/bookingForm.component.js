import template   from './bookingForm.html';
import controller from './bookingForm.controller';
import './bookingForm.styl';

let bookingFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default bookingFormComponent;
