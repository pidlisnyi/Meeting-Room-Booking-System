class NavbarController {
  constructor($log, $mdSidenav, $mdDialog, $mdToast, API, User) {
    this.ref         = API.REF;
    this.$log        = $log;
    this.$mdSidenav  = $mdSidenav;
    this.$mdDialog   = $mdDialog;
    this.$mdToast    = $mdToast;
    this.User        = User;
    this.name        = 'navbar';
    this.appName     = 'Meeting Room Management';
    this.userName    = '';
    this.userAvatar  = '';
    this.isSigned    = '';
  }
  toggleSidenav(param){
    this.$mdSidenav(param).toggle()
      .then(() => {
        this.$log.debug(`${param} toggled`);
      });
  }
  authDialog(){
    this.$mdDialog.show({
      template: '<auth-dialog></auth-dialog>',
      clickOutsideToClose:true,
    })
      .then((authData) => {
        this.userName   = authData[authData.provider].displayName;
        this.userAvatar = authData[authData.provider].profileImageURL;
        this.isSigned   = true;
        this.$log.debug(`Login as ${this.userName}`);
        this.User.setUser(this.userName)
      }, () => {
        this.$log.debug(`Auth cancel`);
      });
  };
  logOut(){
    this.ref.unauth();
    this.isSigned = false;
    this.$mdToast.show(this.$mdToast.simple()
      .textContent(`${this.userName} is logged out`));
    this.$log.debug(`${this.userName} is logged out`);
  }
}

NavbarController.$inject = ['$log', '$mdSidenav', '$mdDialog', '$mdToast', 'API', 'User'];

export default NavbarController;
