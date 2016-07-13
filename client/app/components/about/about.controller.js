class AboutController {
  constructor($scope, $log, $mdDialog, $mdToast, $mdMedia, localForageFactory, User) {
    this.$log               = $log;
    this.$mdDialog          = $mdDialog;
    this.$mdToast           = $mdToast;
    this.$mdMedia           = $mdMedia;
    this.localForageFactory = localForageFactory;
    this.User               = User;
    this.calendarView       = 'month';
    this.viewDate           = new Date();
    this.isCellOpen         = true;
    this.events             = [];
    this.user               = '';
    this.startsAt           = '';
    this.endsAt             = '';
    this.title              = '';
    this.getEvents();
  }
  submit(){
    let _this = this;
    let count = 0;
    let holidays = 0;
    let startTime = moment(this.startsAt).hours();
    let endTime = moment(this.endsAt).hours();
    if((startTime > 18 || startTime < 9) || (endTime > 18 || endTime < 9)){
      holidays++
    }
    _.map(this.events, e => {
      if((e.startsAt < _this.startsAt && e.endsAt > _this.startsAt) || (e.startsAt < _this.endsAt && e.endsAt > _this.endsAt)){
        count++
      }
    });
    if(holidays > 0) {
      this.$mdDialog.show(
        this.$mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Attention')
          .textContent('You can\'t book this room at this time! Please have a rest!')
          .ok('Got it!')
      );
    }
    else {
      if(count > 0){
        this.$mdDialog.show(
          this.$mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Attention')
            .textContent('You can\'t book this room because it is already beasy.')
            .ok('Got it!')
        );
      }
      else {
        this.localForageFactory.setData('events',
          {
            name:     this.user,
            title:    `Room booked by ${this.user} for ${this.title}`,
            startsAt: this.startsAt,
            endsAt:   this.endsAt
          });
        this.events.push({
          name:     this.user,
          title:    `Room booked by ${this.user} for ${this.title}`,
          startsAt: this.startsAt,
          endsAt:   this.endsAt
        });
        this.user            = '';
        this.startsAt        = '';
        this.endsAt          = '';
        this.title           = '';
      }
    }
  }

  getEvents(){
    this.localForageFactory.getData('events').then(data => {
      if(data === null){
        this.events = [];
      }
      else {
        this.events = data;
      }

    });
  }
  eventFormAdditional(){
    this.$mdDialog.show({
      template: '<booking-form></booking-form>',
      clickOutsideToClose:true,
      fullscreen: true
    }).then(() => {
      this.getEvents();
    }, () => {
      this.$log.debug(`Auth cancel`);
    });
  }
  eventClicked = function(event) {
    this.$mdToast.show(this.$mdToast.simple()
      .textContent(`Booked by ${event.name} from ${moment(event.startsAt).format('LLL')} till ${moment(event.endsAt).format('LLL')}`));
  };

  eventDeleted = event => {
    let confirm = this.$mdDialog.confirm()
      .title('Would you like to delete this event?')
      .ariaLabel('Confirmation')
      .ok('Delete')
      .cancel('Cancel');
    this.$mdDialog.show(confirm).then(() => {
      this.events.splice(event.$id, 1);
      this.localForageFactory.removeData(event.$id);
      this.$mdToast.show(this.$mdToast.simple()
        .textContent(`${event.title} deleted`));
    }, () => {
      this.$log.info(`Delete canceled`)
    });
  };

  toggle = function($event, field, event) {
    $event.preventDefault();
    $event.stopPropagation();
    event[field] = !event[field];
  };
}

AboutController.$inject = ['$scope', '$log', '$mdDialog', '$mdToast', '$mdMedia', 'localForageFactory', 'User'];

export default AboutController;
