/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  const result = [];
  let prevAnimals = animals[0];
  let groupAnimals = [prevAnimals];
  for (let i = 1; i < animals.length; i++) {
    const nextAnimals = animals[i];
    if (prevAnimals[0] === nextAnimals[0]) {
      groupAnimals.push(nextAnimals);
    } else {
      result.push(groupAnimals);
      groupAnimals = [nextAnimals];
    }
    prevAnimals = nextAnimals;
  }
  result.push(groupAnimals);
  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
