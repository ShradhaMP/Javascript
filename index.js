/* function changeContent () {
    var myelement = document.getElementById("myelement");
    myelement.innerHTML= "New Text";
}

window.onload = changeContent ; */

let name = "john";
console.log(name);

let firstName = "shri"; //case Sensitive
let FirstName = "geetha";

//var let const
var greet = "hey hi"; //globally scoped
function greeting() {
  var hello = "hello";
}
// console.log(hello);
greet = "good morning"; //can be redeclared
console.log(greet);

console.log(age); //it's important to note that only the declarations are hoisted, not the initializations
var age = 10;

sayHello(); //Function and variable both can be hoisted
function sayHello() {
  console.log("Hello");
}

var apology = "sorry";
if (true) {
  apology = "Say sorry instead";
}

console.log(apology);

let branch = "cse";
if (true) {
  let branch = "ec"; //block scoped will not polute the globally declared variable
  console.log(branch);
}
console.log(branch);

branch = "EEE"; //Can be reintialized but not redeclared

//In case of let we cannot use the variable befor
// console.log(dob);
// let dob=2001

const sales = "good"; //Cannot initialize or redeclare the variable declared as const
// sales='moderate'

//Dynamically Typed
let role = "developer";
typeof role;
role = 10;
typeof role;

//Objects
let person = {
  name: "john",
  age: 30,
};

console.log(person);

//Dot notation
console.log(person.age);
person.name = "Marry";

//Bracket Notation-->In case we will take the property in runtime
person["age"] = 40;
console.log(person["name"]);

//Arrays --> Its a object type in JS
let numbers = [1, 2, 3];
numbers[0] = "one";
console.log(numbers);
console.log(numbers.length);
typeof numbers;

//Functions

function sayHello(name) {
  console.log("Hello" + " " + name);
}

function square(num) {
  return num * num;
}

sayHello("Shraddha");
square(2);

//function expression
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(2, 3));

//Arrow Functions
const cube = (x) => {
  return x * x * x;
};

console.log(cube(2))(
  //IIFE (Immediately Invoked Function Expression)
  (function () {
    console.log("Immediate");
  })()
);
