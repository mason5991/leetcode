function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  const returnValue = [...arr, ...left, ...right];
  console.log(returnValue);
  return returnValue;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let arrL = array.slice(0, Math.floor(array.length / 2));
  let arrR = array.slice(Math.floor(array.length / 2), array.length);

  return merge(mergeSort(arrL), mergeSort(arrR));
}

const myArray = [2, 4, 1, 6, 8, 5, 3, 7];

console.log('Sorted: ', mergeSort(myArray));
