//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  const inputWord = kata.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const result = [];
  for (let i = 0; i < inputWord.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (inputWord[i] === alphabet[j]) {
        result.push(alphabet[j + 1]);
      }
    }
  }
  return result.join("");
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
