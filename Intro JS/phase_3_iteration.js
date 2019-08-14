Array.prototype.bubbleSort = function() {
  let sortArr = this.slice();
  let jumbled = true;

  while (jumbled) {
    jumbled = false;
    for (let i = 0; i < sortArr.length - 2; i++) {
      if (sortArr[i] > sortArr[i+1]) {
        jumbled = true;
        [sortArr[i],sortArr[i+1]] = [sortArr[i+1],sortArr[i]];
      }
    }
  }

  return sortArr;
};

String.prototype.substrings = function() {
  let substr = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j <= this.length; j++) {
      substr.push(this.slice(i,j));
    }
  }
  return substr;
};