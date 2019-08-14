Array.prototype.uniq =  function() {
  let uniqArr = [];

  this.forEach( ele => {
    if (!uniqArr.includes(ele)) {
        uniqArr.push(ele);
    }
  });
  return uniqArr;
};

Array.prototype.twoSum = function() {
  let pairs = [];

  for (let i = 0; i < (this.length-1); i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i,j]);
      }
    }
  }

  return pairs;
};

Array.prototype.transpose = function() {
  const transposed = [];

  for ( let col = 0; col < this[0].length; col++) {
      let subarr = [];
      for ( let row = 0; row < this.length; row++) {
        subarr.push(this[row][col]);
      }
      transposed.push(subarr);
  }
  return transposed;
};