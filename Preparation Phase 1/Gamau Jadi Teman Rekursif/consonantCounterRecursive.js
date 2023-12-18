/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //code here

  let isNotVocal = false;
  const inputSentence = sentences.split(" ").join("");
  const vocal = "aiueo".split("");
  if (sentences === "") {
    return 0;
  } else {
    for (let i = 0; i < vocal.length; i++) {
      if (inputSentence[0].toLowerCase() === vocal[i]) {
        break;
      } else {
        if (i === vocal.length - 1 && isNaN(inputSentence[0]))
          isNotVocal = true;
      }
    }
  }
  return (
    (isNotVocal ? 1 : 0) + consonantCounterRecursive(inputSentence.slice(1))
  );
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3
