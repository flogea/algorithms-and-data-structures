const initialArray = [64, 41, 63, 63, 39, 14, 80, 95, 26, 7, 92, 38, 31, 85, 52, 2, 77, 3, 89, 95];
let complexity = 0;

// O(n^2)

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      complexity++;
    }
  }
  return array;
}

console.log(bubbleSort(initialArray), complexity); // [2, 3, 7, 14, 26, 31, 38, 39, 41, 52, 63, 63, 64, 77, 80, 85, 89, 92, 95, 95] 400
