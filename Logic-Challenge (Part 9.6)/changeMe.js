function changeMe(arr) {
  // you can only write your code here!
  if (arr.length === 0) {
    return console.log(`""`);
  }
  for (let i = 0; i < arr.length; i++) {
    const obj = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3] === undefined ? "Invalid Birth Year" : 2023 - arr[i][3],
    };
    console.log(`${obj.firstName} ${obj.lastName} :`);
    console.log(obj);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
