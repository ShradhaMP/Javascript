//Function statement
a();
// b(); -->Gives an error
function a(){
       console.log("a called");
}

//Function expression
var b=function(){
       console.log("b called");
}

//Difference between function hoisting and function expression is hoisting.

//Anonymous function-->Function without the name
//Anonymous function is used as function expression not as the function statement
// function (){

// } --->This throws an error

//Named function expression
var c=function xyz(){
       console.log("c called");
}

c();
// xyz(); -->Reference error

//First class functions--> The ability to treat it as a value,pass it,return it
var d=function (param1){
       // console.log(param1);
       return param1;
       
}

var e=d(function(){

});

console.log(e);

//Callback function is a function that you pass into another function as an argument for executing later.
setTimeout(function (){
       console.log("Timer");
},3000)
function x(y){
       console.log("X");
       y();
}

x(function y(){
       console.log("Y");
});

//Event Listener
function attachEventListener(){
       let count = 0;
       document.getElementById("myButton").addEventListener("click",function xyz(){
              console.log("Button clicked",++count);
       });
}

attachEventListener();

//Garbage collection-->As the event listener are heavy they end up taking more space so these memory is needed to free up

//Callback Queue or Task Queue--->Callback functions are added into the callback queue (For the browser API's)
//Event loop --> It looks into the queue periodically to find what it needs to pull from there. It pulls a callback function from the queue to the call stack when the stack is empty.
//Micro Task Queue or Job Queue(For promises and Mutation Observer), It has more priority than the callback queue

function f1() {
       console.log('f1');
      }
      
function f2() { 
          console.log('f2');
      }
      
function f3() { 
          console.log('f3');
      }
      
function main() {
        console.log('main');
      
        setTimeout(f1, 50);
        setTimeout(f3, 30);
      
        new Promise((resolve, reject) =>
          resolve('I am a Promise, right after f1 and f3! Really?')
        ).then(resolve => console.log(resolve));
          
        new Promise((resolve, reject) =>
          resolve('I am a Promise after Promise!')
        ).then(resolve => console.log(resolve));
      
        f2();
}
      
main();


console.log("START");

setTimeout(function cbt(){
       console.log("CB settimeout");
},5000);

fetch("https://api.github.com/users")
.then(function cbf(){
       console.log("CB github");
});

console.log("END");

//Blocking the thread for 10sec-->setTimeout will be executed only after this 10sec are completed so it is not always that setTeimeout will run after the defined time
let startDate=new Date().getTime();
let endDate=startDate;
// while(endDate<startDate+10000){
//        endDate=new Date().getTime();
// }

console.log("While Expires");

//Higher-Order function--->Function which takes another function as the argument or returns a function 

//code modularity
const radius=[3,2,4,1];

const area=function (radius){
       return Math.PI*radius*radius;
}

const circumference=function (radius){
       return Math.PI*radius*2;
}

const diameter = function (radius){
       return 2*radius;
}

Array.prototype.compute=function (logic){
       const output=[];
       for(let i=0;i<this.length;i++){
              output.push(logic(this[i]))
       }
       return output;
}

console.log(radius.compute(area));
console.log(radius.map(area))
// console.log(compute(circumference));
// console.log(compute(diameter));


//Map-filter-reduce
//Map is used when we want to transform the whole array

const arr=[2,3,1,6,5];
//Ex:1.Double
const double=function (x){
       return x*2;
}

console.log(arr.map(double));

//Ex:2.Triple
console.log(arr.map(function(x){
       return x*3;
}));

//Ex:3.Binary
console.log(arr.map(x=>x.toString(2)));

//Filter is used to filter the array as required

//Ex:1.Get only the odd numbers
const getOdd=function (x){
       return x%2;
}
console.log(arr.filter(getOdd));

//Ex:1.Get only the even numbers
console.log(arr.filter(function(x){
       return x%2===0;
}));

//Ex:1.Get numbers greaterThanTwo
console.log(arr.filter(x=>x>2));

//Reduce is used to reduce the array to a single value like max,min,sum etc

//Ex:1.Find Sum

const output = arr.reduce(function(acc,curr){
       acc+=curr;
       return acc;
},0);
console.log(output);

//Ex:1.Find Max

const maximum=arr.reduce(function(acc,curr){
       if(curr>acc)
              acc=curr;
       return acc;
},0)

console.log(maximum);

const user=[
       {firstName:"john",lastName:"Donald",age:30},
       {firstName:"daya",lastName:"Gosh",age:23},
       {firstName:"shyam",lastName:"Goyenaka",age:43},
       {firstName:"simmi",lastName:"shah",age:23},
];

//Join the first and last name
const joinName=user.map(x=>x.firstName+" "+x.lastName);
console.log(joinName);

//Classify the age with no. of people
const age=user.reduce(function(acc,curr){
       if(acc[curr.age]){
              acc[curr.age]=++acc[curr.age]
       }
       else{
              acc[curr.age]=1;
       }
       return acc;
},{})

console.log(age);

//FistName of all the users whose age is less than 30
const ageFilter=user.filter((x)=>x.age<30).map(x=>x.firstName)

console.log(ageFilter);


const ageReduce=user.reduce(function(acc,curr){
       if(curr.age<30)
              acc.push(curr.firstName);
       return acc;
},[])

console.log(ageReduce);
