/*
Soal 1
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

function dataHandling(array) {
  let input = array;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (j === 0) {
        console.log(`Nomor ID: ${input[i][j]}`);
      } else if (j === 1) {
        console.log(`Nama Lengkap: ${input[i][j]}`);
      } else if (j === 2) {
        console.log(`TTL: ${input[i][j]} ${input[i][j + 1]}`);
      } else if (j === 4) {
        console.log(`Hobi: ${input[i][j]}`);
      }
    }
    console.log(" ");
  }
  return;
}

console.log(dataHandling(input));

//Soal 2

let input2 = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  let array1 = input;
  array1.splice(1, 2, "Roman Alamsyah Elsharawy", "Provisi Bandar Lampung");
  array1.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(array1);
  let array2 = array1[3].split("/");
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] === "05") {
      console.log("Mei");
      console.log(array2.reverse());
      console.log(array2.reverse().join("-"));
    }
  }
  array1[1];
  let strName = "";
  for (let j = 0; j < array1[1].length - 10; j++) {
    strName += array1[1][j];
  }
  console.log(strName);
  return;
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
