let UserFactory = function () {
  this.user = {};

  let setUser = (param) => {
    debugger
    this.user.name = param;
  };

  let getUser = (param) => {
    debugger
    return this.user[param];
  };

  let isSignedIn = () => {
    return this.user.isSignedIn;
  };

  return { getUser, isSignedIn, setUser };
};

export default UserFactory;
