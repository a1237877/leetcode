//选择排序

function bubbleSort(arr) {
  var len = arr.length
  var minIndex, temp
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {   //右边的比左边的小 则交换位置
        minIndex = j
      }
    }
    temp = arr[i] 
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

const arr = [3,6,9,1,5,10]
console.log(bubbleSort(arr))
