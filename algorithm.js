function swap(array, i, j) {
  var basic = array[i];
  array[i] = array[j];
  array[j] = basic;
}

function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]){
      swap(array, i, i + 1);
      swapped = true;
      }
    }
  } while(swapped);
  return array;
}

module.exports = bubbleSort
