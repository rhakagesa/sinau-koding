function consonantCounterRecursive(str) {
  // Basis dari rekursif: jika panjang string menjadi 0, maka tidak ada karakter konsonan lagi
  if (str.length === 0) {
    return 0;
  } else {
    const input = str.split(" ").join("").split("").join("");
    // Ambil karakter pertama dari string
    const firstChar = input[0].toLowerCase();

    // Cek apakah karakter bukan vokal (a, i, u, e, o)
    const isConsonant =
      firstChar !== "a" &&
      firstChar !== "i" &&
      firstChar !== "u" &&
      firstChar !== "e" &&
      firstChar !== "o";

    // Rekursif: Tambahkan 1 jika karakter adalah konsonan, dan panggil fungsi untuk sisa string
    return (isConsonant ? 1 : 0) + consonantCounterRecursive(str.slice(1));
  }
}

// Contoh penggunaan
const inputString = "alDi Suka MakAn baksO";
console.log(
  `Jumlah karakter konsonan: ${consonantCounterRecursive(inputString)}`
);
