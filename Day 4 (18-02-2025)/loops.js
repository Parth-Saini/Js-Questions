// example 1
{ let i = 5;

for (let i = 0; i <=10; i++) {
    console.log(i);
}
console.log(i);
}
console.log('-------------------');

// example 2
{ var i = 5;

for (var i = 0; i <= 10; i++) {
    console.log(i);
}
console.log(i);
}
console.log('-------------------');

// example 3
const fruits = ['apple', 'banana', 'mango', 'orange', 'papaya'];
for(const fruit of fruits) {
    console.log(fruit);
}

console.log('-------------------');

// example 4

const person = {
    First_name : 'Parth',
    Last_name : 'Saini',
    Age: 19,
    Eye_colour: 'Brown'
}
 for(const key in person){
    console.log (key);
 }

 console.log('-------------------');

 // Example 5

 const secondPerson={
    First_name : 'Atul',
    Last_name : 'Saini',
    Age: 20,
    Eye_colour: 'Brown'
 }

 for(const key in secondPerson){
    console.log (key, ':' , secondPerson[key]);
 }

