class AppController {
  constructor($log, $mdSidenav) {
    this.$log       = $log;
    this.$mdSidenav = $mdSidenav;
    
  }
  toggle(param){
    this.$mdSidenav(param).toggle()
      .then(() => {
        this.$log.debug(`${param} toggled`);
      });
  }
}

AppController.$inject = ['$log', '$mdSidenav'];

export default AppController;
