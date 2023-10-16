/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!

  for (let i = 0; i < arr.length; i++) {
    let count;
    if (arr[i] === "o") {
      count = 0;
      for (let j = i; j < arr.length; j++) {
        if (arr[j] === "x") {
          return count;
        }
        count += 1;
      }
      count = 0;
      for (let j = i; j >= 0; j--) {
        if (arr[j] === "x") {
          return count;
        }
        count += 1;
      }
      return 0;
    }
  }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat(["x", " ", " ", " ", " ", " ", "o", " "])); // 6
console.log(targetTerdekat(["x", "o", " ", " ", " ", " ", " ", " "])); // 1
