class BookingFormController {
  constructor($log, $mdDialog, $mdToast, localForageFactory) {
    this.$log            = $log;
    this.$mdDialog       = $mdDialog;
    this.$mdToast        = $mdToast;
    this.localForageFactory = localForageFactory;
    this.user            = '';
    this.startsAt        = '';
    this.endsAt          = '';
    this.title           = '';
  }
  cancel(){
    this.$mdDialog.cancel();
  }
  submit(){
    this.localForageFactory.setData('events',
      {
        name:     this.user,
        title:    `Room booked by ${this.user} for ${this.title}`,
        startsAt: this.startsAt,
        endsAt:   this.endsAt
      });
    this.$mdDialog.hide();
  }
}

BookingFormController.$inject = ['$log', '$mdDialog', '$mdToast', 'localForageFactory'];

export default BookingFormController;
