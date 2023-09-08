/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let animalsGroup = [];
  animals.sort();
  let currentAnimal = [animals[0]];
  for (i = 1; i < animals.length; i++) {
    let nextAnimal = animals[i];
    let prevAnimal = animals[i - 1];
    if (prevAnimal[0] === nextAnimal[0]) {
      currentAnimal.push(animals[i]);
    } else {
      animalsGroup.push(currentAnimal);
      currentAnimal = [animals[i]];
    }
  }
  animalsGroup.push(currentAnimal);
  return animalsGroup;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
