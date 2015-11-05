var Stack = function() {
  var stackInstance = {
    storage : {},
    count : 0
  };

  extend(stackInstance, stackMethods);

  return stackInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push : function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop : function() {
    if (this.count === 0) {
      return null;
    }
    var pop = this.storage[this.count-1];
    delete this.storage[this.count];
    this.count--;
    return pop;
  },
  size : function() {
    return this.count;
  }
};