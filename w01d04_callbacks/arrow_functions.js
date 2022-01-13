// const addTwo = function(num) {
//   return num + 2;
// };

// const addTwo = (num) => {
//   return num + 2;
// };

// const addTwo = num => {
//   return num + 2;
// }

// const addTwo = num => num + 2;

// console.log(addTwo(3));

// const addTwoValues = (num1, num2) =>{
//   return  num1 + num2;
// }

// console.log(addTwoValues(67, 8))


const yellAtJames = function(callback) {
  const statement = callback("James");
  return `${statement.toUpperCase()}!!!`;
};

// const result = yellAtJames(function(name) {
//   return `${name}, you are not so awesome`;
// });

const result = yellAtJames((name) => `${name}, you are not so awesome`);

console.log(result);

const creature = {
  name: 'bigfoot',
  location: 'pacific northwest',
  printBio: function() {
    console.log(`my name is ${this.name} and I am from the ${this.location}`)
  }
}

creature.printBio();