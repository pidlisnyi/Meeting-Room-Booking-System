class AuthDialogController {
  constructor($log, $mdDialog, $mdToast, API) {
    this.$log        = $log;
    this.$mdDialog   = $mdDialog;
    this.$mdToast    = $mdToast;
    this.ref         = API.REF;
  }
  signIn(param){
    this.ref.authWithOAuthPopup(param, (error, authData) => {
      this.$mdToast.show(this.$mdToast.simple()
        .textContent(`Login as ${authData[authData.provider].displayName} 
        from ${authData.provider} account `));
      this.$mdDialog.hide(authData);
    });
  };
  cancel(){
    this.$mdDialog.cancel();
  }
}

AuthDialogController.$inject = ['$log', '$mdDialog', '$mdToast', 'API'];

export default AuthDialogController;
