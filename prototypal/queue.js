var Queue = function() {
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.count = 0;
  queueInstance.front = 0;
  queueInstance.back = 0;

  return queueInstance;
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.front+this.count] = value;
    this.back++;
    this.count++;
  },
  dequeue : function() {
    if (this.count === 0) {
      return null;
    }
    var result = this.storage[this.front];
    this.front++;
    this.count--;
    return result;
  },
  size : function() {
    return this.count;
  }
};
