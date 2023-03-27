const initialArray = [64, 41, 63, 63, 39, 14, 80, 95, 26, 7, 92, 38, 31, 85, 52, 2, 77, 3, 89, 95];
let complexity = 0;

// O(log2n * n)

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2);
  let middle = array[middleIndex];
  let less = [];
  let greater = [];

  for (let index = 0; index < array.length; index++) {
    complexity++;

    if (index === middleIndex) {
      continue;
    }

    if (array[index] < middle) {
      less.push(array[index]);
    } else {
      greater.push(array[index]);
    }
  }
  return [...quickSort(less), middle, ...quickSort(greater)];
}

console.log(quickSort(initialArray), complexity); // [2, 3, 7, 14, 26, 31, 38, 39, 41, 52, 63, 63, 64, 77, 80, 85, 89, 92, 95, 95] 96
