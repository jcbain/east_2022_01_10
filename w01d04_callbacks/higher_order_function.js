const nums = [1, 2, 3, 4];
const relatives = ['yeti', 'gigantopithecus', 'chewbacca']

// nums.forEach((val) => {
//   const half = val / 2;
//   console.log(half + 3);
// })

const doOperation = function(val) {
  const half = val / 2;
  console.log(half + 3);
}
// nums.forEach(doOperation)

// higher order function
const myForEach = (arr, callback) => {
  for(const value of arr) {
    callback(value)
  }
}


myForEach(nums, (value) => {
  console.log(value + 2);
})

myForEach(relatives, (potato) => {
  console.log(`the relative is ${potato}`)
})




