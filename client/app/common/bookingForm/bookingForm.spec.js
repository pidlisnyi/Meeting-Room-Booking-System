import AuthDialogModule from './index'
import AuthDialogController from './bookingForm.controller';
import AuthDialogComponent from './bookingForm.component';
import AuthDialogTemplate from './bookingForm.html';

describe('AuthDialog', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AuthDialogModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AuthDialogController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AuthDialogTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AuthDialogComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AuthDialogTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AuthDialogController);
      });
  });
});
