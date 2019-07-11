// var quickSort = function(arr) {

//   　　if (arr.length <= 1) { return arr; }
  
//   　　var pivotIndex = Math.floor(arr.length / 2);
  
//   　　var pivot = arr.splice(pivotIndex, 1)[0];
  
//   　　var left = [];
  
//   　　var right = [];
  
//   　　for (var i = 0; i < arr.length; i++){
  
//   　　　　if (arr[i] < pivot) {
  
//   　　　　　　left.push(arr[i]);
  
//   　　　　} else {
  
//   　　　　　　right.push(arr[i]);
  
//   　　　　}
  
//   　　}
  
//   　　return quickSort(left).concat([pivot], quickSort(right));
  
//   };

//   console.log(quickSort([2,4,7,1,8,5,7,10,6,14]))

// 快排， 
// 抽像    a b(女神) c   一次
// [8, 2, 5（女神）, 9, 7]
// 递归 
function quickSort(arr) {
  if (arr.length <= 1) { return arr;}
  var left = [],
    right = [],
    baseDot = Math.round(arr.length / 2),
    base = arr.splice(baseDot, 1)[0];
  // 找到中间值，  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // left  a  
  // base  中间值
  // right  b
  return quickSort(left).concat([base], quickSort(right));
}

console.log(quickSort([1,7,4,9,5,6,7]));
