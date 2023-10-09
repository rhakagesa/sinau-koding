function cariMedian(arr) {
  // you can only write your code here!
  const sortArr = arr.sort((a, b) => a - b);
  if (arr.length % 2 === 1) {
    return sortArr[(arr.length + 1) / 2 - 1];
  } else {
    const median = arr.length / 2;
    const firstArr = arr.slice(0, median);
    const secondArr = arr.slice(median);
    return (firstArr[firstArr.length - 1] + secondArr[0]) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
