/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  str.split("");
  const vocal = "aiueo".split("");
  const nextVocal = "bjvfp".split("");
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vocal.length; j++) {
      if (str[i] === vocal[j] || str[i] === vocal[j].toUpperCase()) {
        str[i] === vocal[j].toUpperCase()
          ? result.push(nextVocal[j].toUpperCase())
          : result.push(nextVocal[j]);
        j = vocal.length - 1;
      } else {
        if (j === vocal.length - 1) result.push(str[i]);
      }
    }
  }
  return result;
}

function reverseWord(str) {
  //code di sini
  const inputFromChangeVocals = changeVocals(str).reverse();
  return inputFromChangeVocals;
}

function setLowerUpperCase(str) {
  //code di sini
  const inputFromReverseWord = reverseWord(str);
  const result = [];
  for (let i = 0; i < inputFromReverseWord.length; i++) {
    inputFromReverseWord[i] === inputFromReverseWord[i].toUpperCase()
      ? result.push(inputFromReverseWord[i].toLowerCase())
      : result.push(inputFromReverseWord[i].toUpperCase());
  }
  return result;
}

function removeSpaces(str) {
  //code di sini
  const inputFromSetLowerUpperCase = setLowerUpperCase(str).join("").split(" ");
  return inputFromSetLowerUpperCase.join("");
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5)
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  const inputRemoveSpaces = removeSpaces(name);
  return inputRemoveSpaces;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
