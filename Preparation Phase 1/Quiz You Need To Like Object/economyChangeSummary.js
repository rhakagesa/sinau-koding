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
  for (let i = 0; i < tradeActivity.length; i++) {
    for (const key in tradeActivity[i]) {
      const resultObject = {
        name: "",
        deposit: 0,
        owner: "",
      };
      const nameAccount = tradeActivity[i][key].match(/[A-Z]\w+/g).join(" ");
      const aritmathSign = String(tradeActivity[i][key].match(/(\+|\-)/g));
      const percentValue = Number(
        tradeActivity[i][key].match(/[0-9]/g).join("")
      );

      if (nameAccount.includes("Jeff Bezos")) {
        resultObject.name = nameAccount;
        resultObject.owner = "Amazon";
        if (aritmathSign.includes("+")) {
          const calcPercent = (percentValue / 100) * duitJeff;
          const addDeposit = duitJeff + calcPercent;
          resultObject.deposit = addDeposit;
          duitJeff = addDeposit;
        } else if (aritmathSign.includes("-")) {
          const calcPercent = (percentValue / 100) * duitJeff;
          const addDeposit = duitJeff - calcPercent;
          resultObject.deposit = addDeposit;
          duitJeff = addDeposit;
        }
      } else if (nameAccount.includes("Larry Page")) {
        resultObject.name = nameAccount;
        resultObject.owner = "Google";
        if (aritmathSign.includes("+")) {
          const calcPercent = (percentValue / 100) * duitLarry;
          const addDeposit = duitLarry + calcPercent;
          resultObject.deposit = addDeposit;
          duitLarry = addDeposit;
        } else if (aritmathSign.includes("-")) {
          const calcPercent = (percentValue / 100) * duitLarry;
          const addDeposit = duitLarry - calcPercent;
          resultObject.deposit = addDeposit;
          duitLarry = addDeposit;
        }
      } else if (nameAccount.includes("Jack Ma")) {
        resultObject.name = nameAccount;
        resultObject.owner = "Alibaba";
        if (aritmathSign.includes("+")) {
          const calcPercent = (percentValue / 100) * duitJack;
          const addDeposit = duitJack + calcPercent;
          resultObject.deposit = addDeposit;
          duitJack = addDeposit;
        } else if (aritmathSign.includes("-")) {
          const calcPercent = (percentValue / 100) * duitJack;
          const addDeposit = duitJack - calcPercent;
          resultObject.deposit = addDeposit;
          duitJack = addDeposit;
        }
      }
      result.push(resultObject);
    }
  }
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
