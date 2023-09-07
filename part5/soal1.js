// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Prajurit, Medis, dan Penjajah.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Prajurit ${nama} , ayo lawan penjajah!
//halo Medis ${nama} , bantu prajurit yang terluka!
//halo Penjajah ${nama} , serang dan rebut wilayah itu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

/* 
1.membuat variabel nama = "" dan peran = "";
2.melakukan pengecekkan pertama dengan kondisi jika nama == "" 
  maka beri peringatan "Nama wajib diisi" dan memberikan input ke variable nama,
3.Jika tidak maka lanjut ke pengecekan kedua, jika peran == "" 
  maka beri peringatan "Pilih peranmu untuk memulai game\n 1.Prajurit 2. Medis 3.Penjajah" dan memberikan input ke variable peran,
4.Kemudian melakukan pengecekkan jika peran == "Prajurit" 
  maka menampilkan output "Halo Prajurit ${nama} , ayo lawan penjajah!", jika tidak maka
5.Melakukan pengecekkan jika peran == "Medis" maka menampilkan output "Halo Medis ${nama} , bantu prajurit yang terluka!", jika tidak maka
6.Melakukan pengecekkan jika peran == "Penjajah" maka menampilkan output "Halo Penjajah ${nama} , serang dan rebut wilayah itu!".
 */

//code disini gunakan console.log untuk outputnya

let x = false;

while (x == false) {
  let nama = "";
  let peran = "";

  if (nama == "") {
    alert("Nama wajib diisi");
    nama = prompt("Masukkan nama");

    if (peran == "") {
      alert("Pilih peranmu untuk memulai game ( Prajurit , Medis , Penjajah )");
      peran = prompt("Pilih peranmu");
      if (peran == "Prajurit") {
        console.log(`Halo Prajurit ${nama} , ayo lawan penjajah!`);
      } else if (peran == "Medis") {
        console.log(`Halo Medis ${nama} , bantu prajurit yang terluka!`);
      } else if (peran == "Penjajah") {
        console.log(`Halo Penjajah ${nama} , serang dan rebut wilayah itu!`);
      } else {
        console.log(
          `tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`
        );
      }
    }
  }
  x = confirm(`"OK" untuk selesai`);
}