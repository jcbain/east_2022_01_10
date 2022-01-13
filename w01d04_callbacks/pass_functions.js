const sayHello = function(name) {
  return `Hi there, ${name}`;
};

const sayGoodbye = function(name) {
  return `Get out of here, ${name}`;
};



// HOF -- higher order function
const yellAtJames = function(callback) {
  const statement = callback("James");
  return `${statement.toUpperCase()}!!!`;
}

const returnValue = yellAtJames(sayGoodbye);

console.log(returnValue);

