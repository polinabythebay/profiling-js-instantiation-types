var Stack = function(){
  var stackInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  stackInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  stackInstance.pop = function(){
    if (size === 0) {
      return null;
    }
    var pop = storage[size-1];
    size--;
    return pop;
  };

  stackInstance.size = function(){
    return size;
  };

  return stackInstance;
};