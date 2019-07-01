var numberArray = [];

for (var i = 1; i <= 50; i++) {
  numberArray.push(i);
}

console.log(numberArray);

console.log(numberArray.slice(0, 10));

numberArray.push((firstName = "Ioana"), (lastName = "Tarnauceanu"));
console.log(numberArray);

var myArray = [99, 76, 45, 89, 34];
console.log(numberArray.concat(myArray));

numberArray[2] = 100;

console.log(numberArray);
