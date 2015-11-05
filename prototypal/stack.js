var Stack = function() {

  var stackInstance = Object.create(stackMethods);
  stackInstance.storage = {};
  stackInstance.count = 0;

  return stackInstance;
};

//add methods to delegated fallback object
stackMethods = {
  push : function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop : function() {
    if (this.count === 0) {
      return null;
    }
    var pop = this.storage[this.count-1];
    delete this.storage[this.count]
    this.count--;
    return pop;
  },
  size : function(value) {
    return this.count;
  }
};
