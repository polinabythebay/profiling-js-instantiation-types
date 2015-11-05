var Queue = function(){
  var queueInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;
  var count = 0;

  queueInstance.enqueue = function(value){
    storage[front+count] = value;
    back++;
    count++;
  };

  queueInstance.dequeue = function(){
    if (count === 0) {
      return null;
    }
    var result = storage[front];
    front++;
    count--;
    return result;
  };

  queueInstance.size = function(){
    return count;
  };

  return queueInstance;
};