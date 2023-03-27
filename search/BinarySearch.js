const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let complexity = 0;

// O(log2n)

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    complexity++;

    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }

    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

function recursionBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  complexity++;

  if (item === array[middle]) {
    return middle;
  }

  if (item < array[middle]) {
    return recursionBinarySearch(array, item, start, middle - 1);
  } else {
    return recursionBinarySearch(array, item, middle + 1, end);
  }
}

console.log(binarySearch(initialArray, 8), complexity); // 7 1
console.log(recursionBinarySearch(initialArray, 8, 0, initialArray.length), complexity); // 7 2
