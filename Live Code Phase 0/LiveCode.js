/*
==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

function findNotRelative(arr1, arr2) {
  //code here
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        j += arr2.length - 1;
      } else {
        if (arr1[i] !== arr2[j] && j === arr2.length - 1) {
          result.push(arr1[i]);
        }
      }
    }
  }
  return result;
}

console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]

/*
===================================
Recursive Mastery : Number Iterator
===================================
Nama:________
[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.
[EXAMPLE]
input: 5
output: 012345
input: 7
output: 01234567
[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/
function numberIterator(num) {
  //code here
  let count = num;
  if (num === 0) return "" + num;

  return numberIterator(num - 1) + num;
}
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'

/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa 
array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key 
berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/

function trainSeating(penumpang) {
  //code here
  const result = {};
  penumpang.forEach((data) => {
    const name = data.nama;
    const stationName = data.gerbong;
    const seatNumber = data.seat;

    if (!result[stationName]) {
      result[stationName] = [
        {
          nama: name,
          seat: seatNumber,
        },
      ];
    } else {
      result[stationName].push({
        nama: name,
        seat: seatNumber,
      });
    }
  });
  return result;
}

console.log(
  trainSeating([
    {
      nama: "Awtian",
      gerbong: "VVIP",
      seat: "A1",
    },
    {
      nama: "Klonoa",
      gerbong: "VIP",
      seat: "V1",
    },
    {
      nama: "Azizy",
      gerbong: "VVIP",
      seat: "A2",
    },
    {
      nama: "Crash",
      gerbong: "Regular",
      seat: "R1",
    },
    {
      nama: "Sena",
      gerbong: "Regular",
      seat: "R3",
    },
    {
      nama: "Heri",
      gerbong: "Regular",
      seat: "R10",
    },
    {
      nama: "Retsu",
      gerbong: "VIP",
      seat: "V2",
    },
    {
      nama: "Hiruma",
      gerbong: "VVIP",
      seat: "A666",
    },
    {
      nama: "Tsubasa",
      gerbong: "VIP",
      seat: "V6",
    },
  ])
);
/*
  Output :
  {
    VVIP:
     [ { nama: 'Awtian', seat: 'A1' },
       { nama: 'Azizy', seat: 'A2' },
       { nama: 'Hiruma', seat: 'A666' } ],
    VIP:
     [ { nama: 'Klonoa', seat: 'V1' },
       { nama: 'Retsu', seat: 'V2' },
       { nama: 'Tsubasa', seat: 'V6' } ],
    Regular:
      [ { nama: 'Crash', seat: 'R1' },
        { nama: 'Sena', seat: 'R3' },
        { nama: 'Heri', seat: 'R10'} ]
  }
  */

/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text) {
  //...
  const result = [];
  text.split("");

  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (text[i].toLowerCase() === text[j].toLowerCase()) {
        if (result.length === 0) result.push(text[i].toLowerCase());
        else {
          if (result.includes(text[i].toLowerCase())) continue;
          else {
            result.push(text[i]);
          }
        }
      }
    }
  }

  return result.length;
}

console.log(duplicateCount("")); //0
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2
console.log(duplicateCount("abcabcdABcefGhg")); //4

function piramid2(num) {
  //code here
  let str = "";
  for (let i = num; i > 1; i--) {
    for (let j = i; j >= 1; j--) {
      str += i;
    }
    str += "\n";
  }
  for (let k = 1; k <= num; k++) {
    for (let l = 0; l < k; l++) {
      str += k;
    }
    str += "\n";
  }
  return str;
}

console.log(piramid2(5));

/*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */
