const myNum = 33;
const anotherNum = myNum;

// console.log('another num is ', anotherNum);

const sayPetName = function(name) {
  console.log(`my pet's name is ${name}`);
};

const printPetName = sayPetName;

// const printPetName = function(name) {
//   console.log(`my pet's name is ${name}`);
// };

sayPetName("Pippa");
printPetName("Prairie");

printPetName.randomKey = "something goes here";

console.log(printPetName)