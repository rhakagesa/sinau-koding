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
  const vocals = "aiueo".split("");
  const nextVocals = "bjvfp".split("");

  const result = [];

  const word = str.split("");
  word.forEach((charInput) => {
    for (let i = 0; i < vocals.length; i++) {
      if (charInput === vocals[i] || charInput === vocals[i].toUpperCase()) {
        charInput === vocals[i].toUpperCase()
          ? result.push(nextVocals[i].toUpperCase())
          : result.push(nextVocals[i]);
        i += vocals.length;
      } else {
        if (i === vocals.length - 1) result.push(charInput);
      }
    }
  });
  return result;
}

function reverseWord(str) {
  //code di sini
  return str.reverse();
}

function setLowerUpperCase(str) {
  //code di sini
  const result = [];
  str.forEach((char) => {
    char === char.toUpperCase()
      ? result.push(char.toLowerCase())
      : result.push(char.toUpperCase());
  });
  return result;
}

function removeSpaces(str) {
  //code di sini
  return str.join("").split(" ").join("");
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5)
    return "Minimal karakter yang diinputkan adalah 5 karakter";

  const vocalChange = changeVocals(name);
  const wordReverse = reverseWord(vocalChange);
  const lowerUpperCase = setLowerUpperCase(wordReverse);
  const spaceRemove = removeSpaces(lowerUpperCase);

  return spaceRemove;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
