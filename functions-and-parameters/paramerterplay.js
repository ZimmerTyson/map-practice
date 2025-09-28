// Task 1: Create a function that accepts a name parameter
// Task 2: Console log a message that includes the name
function includesName(name) {
  console.log(`function must return a name: ${name}`);
}
includesName("Dan");
// Task 3: Call the function and pass different names



// --- 10 Practice Tasks ---
// Example 1: Function accepts a name and logs it

function whatIsYourName(name) {
  console.log(`Whats up ${name}, I hope you are doing terrific`);
}

whatIsYourName("Tyson");

// Example 2: Function welcomes a user by name

const welcomeUser = (name) => {
  console.log(`Welcome on in ${name}`);
}

welcomeUser("Sydney");


// Example 3: Function checks and logs age

function checkAge() {
  // let age = prompt("How old are you");
  // console.log(`user is ${age} years old`);
}

checkAge();


// Example 4: Function logs a favorite color


function userColor() {
  let favoriteColor = ("What is your favorite color?");
  console.log(`The users favorite color is ${favoriteColor}`);
}

userColor();

// Example 5: Function says bye to a user

function peaceOut(user) {
  console.log(`see you later, ${user}!`)
}

peaceOut("Tyson");

// Example 6: Function doubles a number

const letsDivide = (number) => {
  return number * 2;
}

console.log(letsDivide(20));

// Example 7: Function squares a number

function letsSquareNumbers(number) {
  return number * number;
}

console.log(letsSquareNumbers(20));

// Example 8: Function greets with full name

function fullNameHello(firstName, lastName) {
  console.log(`Hey ${firstName} ${lastName}, I hope you have a great day!`);
}

fullNameHello("Tyson", "Zimmer");

// Example 9: Function reminds of a task

function reminderTask(task) {
  console.log(`you still have to ${task}, don't forget!`)
}

reminderTask("wash your butt");

// Example 10: Function logs today’s temperature

const temp = "88 degrees";

function logTemp() {
  console.log(`today it is ${temp} outside! Stay in the shade`);
}

logTemp();