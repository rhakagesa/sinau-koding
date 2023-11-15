// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = "wow JavaScript is so cool";
let exampleFirstWord2 = word2[0] + word2[1] + word2[2];
let exampleSecondWord2 =
  word2[4] +
  word2[5] +
  word2[6] +
  word2[7] +
  word2[8] +
  word2[9] +
  word2[10] +
  word2[11] +
  word2[12] +
  word2[13];
let exampleThirdWord2 = word2[15] + word2[16];
let exampleFourthWord2 = word2[18] + word2[19];
let exampleFifthWord2 = word2[21] + word2[22] + word2[23] + word2[24];

console.log("First Word: " + exampleFirstWord2);
console.log("Second Word: " + exampleSecondWord2);
console.log("Third Word: " + exampleThirdWord2);
console.log("Fourth Word: " + exampleFourthWord2);
console.log("Fifth Word: " + exampleFifthWord2);

// // ---------------------------------------
console.log(
  exampleFirstWord2 +
    " " +
    exampleSecondWord2 +
    " " +
    exampleThirdWord2 +
    " " +
    exampleFourthWord2 +
    " " +
    exampleFifthWord2
);
console.log(" ");
// // ---------------------------------------
