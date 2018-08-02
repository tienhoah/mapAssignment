function map (arr, fn){
  var newArray = [];
  arr.forEach(function(e, index, coll){
    newArray.push(fn(e,index, coll));
  });
  return newArray;
}

var words = ["ground", "control", "to", "major", "tom"];

var len = map(words, function(word) {
  return word.length;
});
console.log(len);

var up = map(words, function(word) {
  return word.toUpperCase();
});
console.log(up);

var revjoin = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(revjoin);