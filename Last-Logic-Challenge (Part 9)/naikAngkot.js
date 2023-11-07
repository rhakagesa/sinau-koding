/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  if (arrPenumpang.length === 0) return [];

  const result = [];
  arrPenumpang.forEach((element) => {
    const obj = {
      penumpang: element[0],
      naikDari: element[1],
      tujuan: element[2],
      bayar: 2000,
    };

    for (let i = 0; i < rute.length; i++) {
      if (obj.naikDari === rute[i]) {
        let countRoute = 0;
        for (let j = i + 1; j < rute.length; j++) {
          countRoute++;
          if (obj.tujuan === rute[j]) obj.bayar *= countRoute;
        }
      }
    }
    result.push(obj);
  });
  return result;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
