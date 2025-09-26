

// Task 1: Destructure name and age from an object

const person = {name: "Tyson", age: 28};
const {name, age} = person;

console.log(name, age);
console.log(name);


// Task 2: Destructure x and y from and object

const coordinates = {x: 230, y: -19};
const {x, y} = coordinates;


console.log(`x is: ${x} and y is: ${y}`);

// Task 3: Destructure values from an array

const colors = ["blue", "red", "yellow", "white"];
const [first, second, third] = colors;

console.log(first, second, third);


// Task 4: Destructure two fruit names from an array

const fruits = ["bananas", "apple", "orange"]
const [fruit1, , fruit3] = fruits;

console.log(fruit1, fruit3);


// Task 5: Destructure job from info from object

const info = {name: "Tyson", job: "coder"};
const {job} = info;

console.log(job);


// Task 6: Destructure boolean and language from array

const personalInfo = [true, "english", false, "spanish"];
const [val1, val2, , val3] = personalInfo;

console.log(val1, val2, val3);


// Task 7: Destructure title from post object

const post = {title: "this is awesome!"};
const {title} = post;

console.log(title);

// Task 8: RGB values from array

const rgbColors = [255, 234, 222, 200];
const [rgb1, rgb2] = rgbColors;

console.log(rgb1, rgb2);

// Task 9: Destructure score and level from object

const students = {score: 100, level: "master"};
const {score, level} = students;


console.log(score, level);


// Task 10: Destructure enabled and theme from array

const devTheme = ["Dark Mode"]
const [currentTheme] = devTheme; 

console.log(currentTheme);


// Task 11: destructure an array of objects

const employees = [
  {name: "tyson", job: "developer"},
  {name: "sydney", job: "scientist"},
  {name: "michael", job: "sommelier"}
];

for (const {
  name: n,
  job: j,
} of employees)

console.log(n, j);