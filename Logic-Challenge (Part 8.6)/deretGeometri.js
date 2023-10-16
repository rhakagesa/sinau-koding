function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  const deretValue = Math.round(arr[1] / arr[0]);
  for (let i = arr.length - 1; i > 0; i--) {
    const nextValue = Math.round(arr[i] / arr[i - 1]);
    if (deretValue === nextValue) {
      return true;
    }
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
