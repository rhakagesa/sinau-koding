//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  //   you can only write your code here!
  if (angka <= 1) {
    return false;
  } else if (angka % 2 === 0 && angka !== 2) {
    return false;
  } else if (angka === 2 || angka === 3) {
    return true;
  } else if (angka > 3) {
    let pembagi = 3;
    while (pembagi * pembagi <= angka) {
      if (angka % pembagi === 0) {
        return false;
      } else if (angka % (pembagi + 2) === 0) {
      }
      pembagi += 2;
    }
    return true;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
