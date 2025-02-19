//Example 1
const fruit = new Set(['a','b', 'c','d']);
for (let list of fruit){
    console.log(list);
}

// Example 2 
const cars = new Set();
cars.add("Audi");
cars.add("Mercedes");
cars.add("BMW");
console.log(cars);

// Example 3
const bike = new Set (["Honda", "Bajaj", "Hero", "TVS"]);
console.log(bike.has("BMW"));
console.log(bike.has("Honda"));

// Example 4
const names = new Set(["Atul", "Parth", "Hardik", "Rudransh"]);
console.log(names.keys());

//Example 5
const number = new Set(["1", "2", "3", "4"]);
console.log(number.entries());

//Example 6
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
console.log(fruits);