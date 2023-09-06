function pasanganTerbesar(num) {
  // you can only write your code here!
  let numbr = num.toString(),
    bigPartner = 0,
    bigPartnerNext = 0;

  for (let i = 0; i < numbr.length; i++) {
    bigPartnerNext = parseInt(numbr[i] + numbr[i + 1]);
    if (bigPartner < bigPartnerNext) {
      bigPartner = bigPartnerNext;
    }
  }
  return bigPartner;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
