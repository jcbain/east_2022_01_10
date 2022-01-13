const sayHello = function(name) {
  return `Hi there, ${name}`;
};

const yellAtJames = function(callback) {
  const statement = callback("James");
  return `${statement.toUpperCase()}!!!`;
}

// const result = yellAtJames(sayHello);
const result = yellAtJames(function(name) {
  return `${name}, you are not so awesome`;
});


console.log(result)

