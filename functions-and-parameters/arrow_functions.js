// Task 1: Declare a function using the function keyword
// Task 2: Declare a function using an arrow function
// Task 3: Console log different messages inside each function



// --- 10 Practice Tasks ---
// Example 1: Create a traditional function that logs a message

function youAreAwesome() {
  console.log("you are killing it my man");
}

youAreAwesome();


// Example 2: Create an arrow function that logs a message

const funLog = () => {
  console.log("Whats up foolio");
}

funLog();


// Example 3: Create a function that adds two numbers

function addNumbers(num1, num2) {
  return num1 + num2
}

console.log(addNumbers(2, 5));

// Example 4: Create an arrow function that multiplies two numbers

const mulitplyNums = (num1, num2) => {
  return num1 * num2;
}

console.log(mulitplyNums(3, 6));

// Example 5: Create a function that squares a number

function squareNums(num1) {
  return num1 * 2;
}

console.log(squareNums(20));

// Example 6: Create an arrow function that divides two numbers

const divideNums = (one, two) => {
  return one / two;
}

console.log(divideNums(325, 35));

// Example 7: Create a function that logs the current date

function currentDate() {
  return new Date();
}

console.log(currentDate());


// Example 8: Create an arrow function that shouts

const shout = (sentence) => {
  return sentence.toUpperCase();
}

console.log(shout("I hope you are having a fantastic day!"));

// Example 9: Create a function that whispers

function whisper(sentence) {
  return sentence.toLowerCase();
}

console.log(whisper("YOU ARE SO BADASS MY MAN"));

// Example 10: Create an arrow function that returns a random number

const randomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
}

console.log(randomNumber());