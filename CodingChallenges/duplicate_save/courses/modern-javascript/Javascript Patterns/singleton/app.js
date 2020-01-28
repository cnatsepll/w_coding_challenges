// Singleton is a version of the Module Pattern
// it is an Immedieate Anonymous Function
// it can only return one instance of an object at a time
// repeated calls to the constructor will return the same instance
// it maintains a private reference that the outside cant reference
//
// this would prevent two users from being created at once
//


const Singleton = (function(){
  let instance;

  function createInstance() {
    const object = new Object({name: 'NAME'});
    return object;
  }

  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();


instanceA = Singleton.getInstance();
instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);

