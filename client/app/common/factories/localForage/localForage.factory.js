import localforage from 'localforage';
import _ from 'lodash';

let localForage = () => {

  let getData = param => {
    return localforage.getItem(param, res => {
      if(res !== null) {
        console.log(`Data ${res} get from localForage`);
      }
      return res
    });
  };

  let setData = (name, event) => {
    let storage = [];
    getData(name).then(data => {
      storage = data;

      if(storage !== null && !_.isArray(event)) {
        storage.push(event);
        return localforage.setItem(name, storage, (err, res) => {
          if(res !== null) {
            console.log(`Data ${res} set to localForage`);
          }
          return res
        });
      }


      else {
        if(_.isArray(event)){
          return localforage.setItem(name, event, (err, res) => {
            if(res !== null) {
              console.log(`Data ${res} set to localForage`);
            }
            return res
          });
        }
        else {
          let arr = [];
          arr.push(event);
          return localforage.setItem(name, arr, (err, res) => {
            if(res !== null) {
              console.log(`Data ${res} set to localForage`);
            }
            return res
          });
        }
    1  }
    });
  };

  let removeData = id => {
    let storage = [];
    getData('events').then(data =>{
      storage = data;
      storage.splice(id, 1);
      setData('events', storage)
    })
  }

  return { getData, setData, removeData };

};

export default localForage;
