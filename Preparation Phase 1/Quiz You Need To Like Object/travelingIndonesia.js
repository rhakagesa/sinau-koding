/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  //code here
  if (!arr.length) return [];

  const cost = {
    Pesawat: 275000,
    Kereta: 250000,
    Bis: 225000,
  };

  const payment = {
    OVO: 0.15,
    Dana: 0.1,
    Gopay: 0.05,
  };

  const route = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];

  const result = [];
  //looping array
  for (let i = 0; i < arr.length; i++) {
    const inputData = arr[i];
    const obj = {};
    let extractData = "";
    let stripCounter = 1;
    for (let j = 0; j < inputData.length; j++) {
      if (inputData[j] !== "-") extractData += inputData[j];

      if (inputData[j] === "-" && stripCounter === 1) {
        obj.name = extractData;
        extractData = "";
        stripCounter++;
      } else if (inputData[j] === "-" && stripCounter === 2) {
        obj.departureCity = extractData;
        extractData = "";
        stripCounter++;
      } else if (inputData[j] === "-" && stripCounter === 3) {
        obj.destinationCity = extractData;
        extractData = "";
        stripCounter++;
      } else if (j === inputData.length - 1 && stripCounter === 4) {
        obj.transport = extractData;
        extractData = "";

        let countRoute;
        for (let k = 0; k < route.length; k++) {
          if (obj.departureCity === route[k]) {
            countRoute = 0;
            for (let l = k + 1; l < route.length; l++) {
              countRoute++;
              if (obj.destinationCity === route[l]) {
                k = route.length;
                break;
              } else if (l === route.length - 1) {
                countRoute = 0;
              }
            }
            if (countRoute === 0) {
              for (let l = k - 1; l >= 0; l--) {
                countRoute++;
                if (obj.destinationCity === route[l]) {
                  k = route.length;
                  break;
                }
              }
            }
          }
        }

        let costRoute;
        let totalCostAfterDisc;

        switch (emoney) {
          case "OVO":
            switch (obj.transport) {
              case "Bis":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Bis;
                totalCostAfterDisc = costRoute - costRoute * payment.OVO;
                obj.totalCost = totalCostAfterDisc;
                break;

              case "Kereta":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Kereta;
                totalCostAfterDisc = costRoute - costRoute * payment.OVO;
                obj.totalCost = totalCostAfterDisc;
                break;

              case "Pesawat":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Pesawat;
                totalCostAfterDisc = costRoute - costRoute * payment.OVO;
                obj.totalCost = totalCostAfterDisc;
                break;
            }
            break;

          case "Dana":
            switch (obj.transport) {
              case "Bis":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Bis;
                totalCostAfterDisc = costRoute - costRoute * payment.Dana;
                obj.totalCost = totalCostAfterDisc;
                break;

              case "Kereta":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Kereta;
                totalCostAfterDisc = costRoute - costRoute * payment.Dana;
                obj.totalCost = totalCostAfterDisc;
                break;

              case "Pesawat":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Pesawat;
                totalCostAfterDisc = costRoute - costRoute * payment.Dana;
                obj.totalCost = totalCostAfterDisc;
                break;
            }
            break;

          case "Gopay":
            switch (obj.transport) {
              case "Bis":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Bis;
                totalCostAfterDisc = costRoute - costRoute * payment.Gopay;
                obj.totalCost = totalCostAfterDisc;
                break;

              case "Kereta":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Kereta;
                totalCostAfterDisc = costRoute - costRoute * payment.Gopay;
                obj.totalCost = totalCostAfterDisc;
                break;

              case "Pesawat":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Pesawat;
                totalCostAfterDisc = costRoute - costRoute * payment.Gopay;
                obj.totalCost = totalCostAfterDisc;
                break;
            }
            break;

          default:
            switch (obj.transport) {
              case "Bis":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Bis;
                obj.totalCost = costRoute;
                break;

              case "Kereta":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Kereta;
                obj.totalCost = costRoute;
                break;

              case "Pesawat":
                costRoute = 0;
                totalCostAfterDisc = 0;

                costRoute = countRoute * cost.Pesawat;
                obj.totalCost = costRoute;
                break;
            }
            break;
        }
        result.push(obj);
      }
    }
  }

  for (let y = 0; y < result.length; y++) {
    for (let z = 1; z <= result.length - 1; z++) {
      if (result[z - 1].totalCost < result[z].totalCost) {
        [result[z - 1], result[z]] = [result[z], result[z - 1]];
      }
    }
  }

  return result;
}

console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO"
  )
);
/*
  [ { name: 'Bahari',
      departureCity: 'Semarang',
      destinationCity: 'Denpasar',
      transport: 'Pesawat',
      totalCost: 467500 },
    { name: 'Alif',
      departureCity: 'Denpasar',
      destinationCity: 'Surabaya',
      transport: 'Kereta',
      totalCost: 212500 },
    { name: 'Danang',
      departureCity: 'Yogyakarta',
      destinationCity: 'Semarang',
      transport: 'Bis',
      totalCost: 191250 } ]
  */
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    [
      "Shafur-Surabaya-Yogyakarta-Kereta",
      "Taufik-Semarang-Surabaya-Pesawat",
      "Alex-Yogyakarta-Semarang-Kereta",
    ],
    "Dana"
  )
);
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
    "Gopay"
  )
);
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];
