// Practice Tasks

//Example 1: double each number in an array using map

const numbers = [2, 4, 6];
const doubled = numbers.map((n) => n * 2);

console.log(doubled);

//Example 2: convert each word to uppercase using map

const words = ["hello", "test", "newTest"]

const upperCase = words.map((w) => w.toUpperCase());

console.log(upperCase);

//Example 3: Add 1 to each number using map 

const playNumbers = [1, 2, 3, 5, 6];

const addOne = playNumbers.map((num) => num + 1);

console.log(addOne);


//Example 4: square each number in array using map

const newNumbers = [1, 23, 34, 44];

console.log(newNumbers.map((num) => num * 2));


//Example 5: add exclamation mark to letters using map

const preWords = ["howdy", "hello", "test", "sydney"];

console.log(preWords.map((word) => word + "!"));



//Example 6: flip each boolean using map

const bools = [true, false, true, false];

console.log(bools.map((value) => !value ));


//Example 7: add 'yrs' to each age using map

const testNumbers = [20, 23, 54, 34];

const addYrs = testNumbers.map((num) => num + ' Yrs');
console.log(addYrs);


//Example 8: Get length of each name using map

const names = ["sydney", "tyson", "harry", "khy"];

const nameLength = names.map((name) => name.length);

console.log(nameLength);



//Example 9: Convert celsius to fahreneit using map

const degrees = [20, 10, 0];

const convertDegree = degrees.map((degree) => {
  let converted = degree * 1.8 + 32;
  console.log(`${converted} Fahrenheit`);
});

convertDegree();

//Example 10: Prefix IDs with 'ID-' using map

const idNumbers = [1243, 2345, 3454, 3456];

const addNumberID = idNumbers.map((id) => "ID-" + id );

console.log(addNumberID);