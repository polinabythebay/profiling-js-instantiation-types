var Queue = function(){
  var queueInstance = {
    storage : {},
    count : 0,
    front : 0,
    back : 0
  };

  extend(queueInstance, queueMethods);

  return queueInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.front+this.count] = value;
    this.back++;
    this.count++;
  },
  dequeue: function() {
    if (this.count === 0) {
      return null;
    }
    var result = this.storage[this.front];
    this.front++;
    this.count--;
    return result;
  },
  size: function() {
    return this.count;
  }
};