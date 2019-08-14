Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};


Array.prototype.myMap = function(callback) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(callback(this[i]));
  }
  return mapped;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = 0;
  if (initialValue) {
    acc = initialValue;
  }

  for(let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

