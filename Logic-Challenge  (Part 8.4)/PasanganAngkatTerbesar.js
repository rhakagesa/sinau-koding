function pasanganTerbesar(num) {
  // you can only write your code here!
  const numArray = num.toString().split("");
  let currentNum = numArray[0].concat(numArray[1]);
  for (let i = 0; i < numArray.length; i++) {
    const nextNum = numArray[i].concat(numArray[i + 1]);
    if (nextNum > currentNum) {
      currentNum = nextNum;
    }
  }
  return Number(currentNum);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
