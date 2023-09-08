function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let rasio1 = arr[arr.length - 1] / arr[arr.length - 2];
  let indexBelakang = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      let rasio2 = arr[indexBelakang] / arr[indexBelakang - 1];

      if (rasio1 === rasio2) {
        rasio1 = rasio2;
        indexBelakang--;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretGeometri([5, 25, 125, 625, 3125])); // true
