//rest and spread operator --> Both follows (...)dots
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

function myfunc(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(args);
}

//A function definiton can have only one rest parameter and that to at the last
myfunc("one", "two", "three", "four", "five");

//The spread syntax allows an iterable, such as an array or string, to be expanded.
function add(x, y, z) {
  console.log(x + y + z);
}

const arr = [4, 6, 2];
add(...arr);

//With object
var students = {
  name: "Sogan",
  age: 20,
  hobbies: ["singing", "sports"],
};

const { age, ...rest } = students;
console.log(age, rest);

var otherStudent = {
  ...students,
  age: 24,
};

console.log(otherStudent);

//Optional Chaining
//The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

let user = {
  name: "gafan",
  age: 29,
};

// console.log(user.address.streetname); -->Throws an error
console.log(user.address?.streetname);

//sort() -->sorts the elements of an array in place and returns the reference to the same array, now sorted.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

const nums = [1, 20, 1000, 5, 30];
console.log(nums.sort());

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let username = "john";
console.log(username ?? "Anonymous");

let userId;
console.log(userId ?? "Not Exist");

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

//Event Listener in JavaScript is a procedure or method executed when any event occurs like a click event
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//Event Bubbling--->When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
grandparent.addEventListener("click", () => {
  console.log("Grandparent Bubble");
});

parent.addEventListener("click", (e) => {
  console.log("Parent Bubble");
  //e.stopPropagation(); -->stops the move upwards, but on the current element all other handlers will run
});


//Capturing – the event goes down to the element.
child.addEventListener("click", () => {
  console.log("Child Bubble");
});

grandparent.addEventListener("click", () => {
  console.log("Grandparent captured");
},{capture:true});

parent.addEventListener("click", (e) => {
  console.log("Parent captured");
},{capture:true});

child.addEventListener("click", () => {
  console.log("Child captured");
});

