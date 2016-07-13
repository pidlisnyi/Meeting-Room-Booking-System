let FirebaseFactory = function (API, $firebaseArray) {
  this.API = API;
  this.$firebaseArray = $firebaseArray;

  let setData = (name, title, startDate, endDate) => {
    this.API.REF.push(
      {
        name:       name,
        title:      title,
        startsAt:   startDate.toString(),
        endsAt:     endDate.toString(),
      }
    );
  };
  let getData = () => {
    return this.API.REF.on('value', data => {
      return data
    });

  };

  return { setData, getData };
};



FirebaseFactory.$inject = ['API', '$firebaseArray'];

export default FirebaseFactory;
