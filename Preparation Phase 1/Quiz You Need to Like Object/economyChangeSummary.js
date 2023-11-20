/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  let duitJeff = 100000;
  let duitLarry = 95000;
  let duitJack = 90000;

  const result = [];

  tradeActivity.forEach((el) => {
    el.forEach((data) => {
      const name = data.replace(/([0-9]||\+||\-||\%)+/g, "");
      const percent = data.replace(/([A-z]||\+||\-||\%)+/g, "");
      const percentVal = Number(percent);
      const operator = data.replace(/([A-z0-9]||\%)+/g, "");

      const obj = {};

      switch (name) {
        case "Jeff Bezos":
          obj.name = name;

          if (operator.includes("+")) {
            const plusMoneyJeff = duitJeff + (percentVal / 100) * duitJeff;
            obj.deposit = plusMoneyJeff;
            duitJeff = plusMoneyJeff;
          } else if (operator.includes("-")) {
            const plusMoneyJeff = duitJeff - (percentVal / 100) * duitJeff;
            obj.deposit = plusMoneyJeff;
            duitJeff = plusMoneyJeff;
          }

          obj.owner = "Amazon";
          result.push(obj);
          break;

        case "Larry Page":
          obj.name = name;

          if (operator.includes("+")) {
            const plusMoneyLarry = duitLarry + (percentVal / 100) * duitLarry;
            obj.deposit = plusMoneyLarry;
            duitLarry = plusMoneyLarry;
          } else if (operator.includes("-")) {
            const plusMoneyLarry = duitLarry - (percentVal / 100) * duitLarry;
            obj.deposit = plusMoneyLarry;
            duitLarry = plusMoneyLarry;
          }

          obj.owner = "Google";
          result.push(obj);
          break;

        case "Jack Ma":
          obj.name = name;

          if (operator.includes("+")) {
            const plusMoneyJack = duitJack + (percentVal / 100) * duitJack;
            obj.deposit = plusMoneyJack;
            duitJack = plusMoneyJack;
          } else if (operator.includes("-")) {
            const plusMoneyJack = duitJack - (percentVal / 100) * duitJack;
            obj.deposit = plusMoneyJack;
            duitJack = plusMoneyJack;
          }

          obj.owner = "Alibaba";
          result.push(obj);
          break;
      }
    });
  });
  return result;
}

console.log(
  economyChangeSummary([
    ["Jeff Bezos+5%", "Larry Page+10%", "Jeff Bezos-3%"],
    ["Larry Page+2%", "Larry Page-1%"],
    ["Jack Ma+4%"],
    ["Larry Page-8%", "Jack Ma+20%", "Jeff Bezos-3%", "Jeff Bezos+8%"],
  ])
);
/* 
    [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
    { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
    { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
    { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
    { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
    { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
  */
console.log(
  "=============================================================================="
);

console.log(economyChangeSummary([["Jeff Bezos-10%"]]));
/*
    [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
  */
