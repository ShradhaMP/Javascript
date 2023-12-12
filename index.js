/* function changeContent () {
    var myelement = document.getElementById("myelement");
    myelement.innerHTML= "New Text";
}

window.onload = changeContent ; */

// let name = "john";
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

//Arrow Function
//For passing single argument
let greet=name=>{
  console.log("hi"+" "+name);
}
greet("Shraddha");

//For passing multiple argument
let temp = (name,age)=>{
  console.log("hi "+ name + " your age is "+ age);
}
temp("mary",20);

//If only one variable to return
const sqr=num=> num*num;
sqr(2);

//This keyword-->Refers to the function where this is present
let person={
  test(){
    // var self=this
    //Function rebinds the "this" keyword to present function
    setTimeout(function(){
        console.log(this);  
    },2000);
    
    //Arrow funciton doesnot rebind "this" and takes the parent reference only
     setTimeout(()=>{
        console.log(this);  
    },2000);
  }
}
person.test();

//Template Literals
var name="Developer"
console.log("Welcome "+name+" have a nice day!") //ES5

console.log(`welcome ${name} have a nice day`);

//ES5 doesnot support multiline string to get next line we should use \n
var res="nice to meet you "+name+"\n"+"Have fun";
console.log(res);

//ES6 supports multiline string 
var res6=`nice to meet you ${name}
 Have Fun!!
`

//Array and object Destructuring
//ES5
var details={
  name:"john",
  contact:"11125476235",
  email:"ingdoa@gmail.com"
};
var name=details.name;
var cont=details.contact;
var email=details.email;

console.log(name);
console.log(cont);
console.log(email);

//ES6
const details6={
  name6:"Marry",
  cont6:"73487187",
  email6:"hdga@gmail.com"
}

let {name6:company_name,cont6,email6}=details6;
console.log(company_name);
console.log(cont6);
console.log(email6);

const arr=[1,2,3,4];
let [v1,v2,v3,v4]=arr;
console.log(v1);
