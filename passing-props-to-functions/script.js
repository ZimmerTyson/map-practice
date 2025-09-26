

// Example 1: Function receives a user object and logs the name and age

function showUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

showUserInfo({name: "will", age: 25});


// Example 2: use object destructuring to log user details

function userDetails(user) {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
}

userDetails({name: "Tyson", email: "zimmertyson@gmail.com"});


// Example 3: log city and country from an object

const usersLocation = {city: "Los Angles", country: "US"};

function userLocation(user) {
  console.log(`City: ${user.city}, Country: ${user.country}`);
}

userLocation(usersLocation);


// Example 4: log username and email from an object

const userLogData = {username: "macdaddy101", email: "macdaddy@gmail.com"};

function displayUserData(user) {
  console.log(`Username: ${user.username}, Email: ${user.email}`);
}

displayUserData(userLogData);

// Example 5:Log views and likes from stats object

const videoMetrics = {views: 100000, likes: 2343};

function presentVideoMetrics(videoMetrics) {
  console.log(`This video has ${videoMetrics.views} and ${videoMetrics.likes} likes`);
}

presentVideoMetrics(videoMetrics);

// Example 6: Log x and y coordinates

const coordinates = {x: 2344, y: -234};

function placeCoordinates(location) {
  console.log(`You should place the content at ${location.x}px and ${location.y}px`);
}

placeCoordinates(coordinates);

// Example 7: log dark mode settings and language

const deviceSettings = {mode: "dark mode", language: "english"};

function logSettings(setting) {
  console.log(`you are currently using ${setting.mode} and you language is set to ${setting.language}`);
}

logSettings(deviceSettings);

// Example 8: log title and length of a summary

const blogInfo = {title: "best blog in the world", summary: "this blog covers everything you need to know in life to be awesome"};

function blogSummary(blog) {
  console.log(`the name of this blog is ${blog.title} and the summary is ${blog.summary.length} characters long`);
}

blogSummary(blogInfo);

// Example 9: log name, age, and job from user

const employeeInfo = {name: "Tyson", age: "28", job: "developer in training"};

function grabEmployeeInfo(employee) {
  console.log(`The name of the employee is ${employee.name} and they are ${employee.age} years old. They are currently a ${employee.job}`);
}

grabEmployeeInfo(employeeInfo);


// Example 10: log sender and message content

const senderInfo = {sender: "Tyson", message: "What up! you are killing it my man"};

function displaySenderInfo(sender) {
  console.log(`${sender.sender} wants to say ${sender.message}`);
}

displaySenderInfo(senderInfo);