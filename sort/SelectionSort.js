const initialArray = [64, 41, 63, 63, 39, 14, 80, 95, 26, 7, 92, 38, 31, 85, 52, 2, 77, 3, 89, 95];
let complexity = 0;

// O(n^2)

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      complexity++;
    }

    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

console.log(selectionSort(initialArray), complexity); // [2, 3, 7, 14, 26, 31, 38, 39, 41, 52, 63, 63, 64, 77, 80, 85, 89, 92, 95, 95] 190
