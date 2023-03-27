const initialArray = [1, 3, 2, 5, 6, 4, 67, 55, 34, 13, 23, 8, 9, 10];
let complexity = 0;

// O(n)

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    complexity++;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(initialArray, 4), complexity); // 5 6
console.log(linearSearch(initialArray, 33), complexity); // null 20
