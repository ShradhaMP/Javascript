//Hoisting means we can use function or variable in a code before it is actually being declared
console.log(k);
var k=0;

//Temporal Dead Zone:  The time till the let variable is hoisted and initialized.
//The temporal dead zone ends when the let variable is initialized.
//let k=0;

//Anything defined outside the function is termed to be global as soon as js is executed global execution context and global object is created. And window here refers to the global object
var a=10;
function a(){
       var b=10;
}

console.log(a);
console.log(window.a);
console.log(this.a);
// console.log(b); ---> Will cause an error because b is not a global object

//Undefined can be treated as a placeholder until the variable is initialized
console.log(x);
var x=10;
console.log(x)
// console.log(y);  --> here y is never declared so it gives not defined error

// console.log(b);
const b=20;

//Block -->Multiple statements are grouped together,this is done in case where js accepts single statement rather then a multiple statement

if(true)
{
       var c=10;
       console.log(c);
}

//let and const are block-scoped trying to access them outside the block might give an error whereas var is function-scoped
{
       var w=10;
       let y=20;
       const z=30;
       console.log(w);
       console.log(y);
       console.log(z);
}
console.log(w);
// console.log(y);
// console.log(z);

function r(){
       var s=1;
       let t=2;
       const u=3;
       console.log(s);
       console.log(t);
       console.log(u);
}
r();
// console.log(s);
// console.log(t);
// console.log(u);


//Shadowing --> refers to a situation where a variable declared within a certain scope has the same name as a variable in an outer scope
var i=10;
{
       var i=20;
       console.log(i);
}
console.log(i);

let j=10;
{
       let j=100;
       console.log(j);
}
console.log(j);

//CLOSURE is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
function l(){
       var f=10;
       function t(){
              var o=80;
              function u(){
                     console.log(o,f);
              }

              u();
              // var o=0;
              // return u;
       }
       t();
}
l();
// var p=l();
// console.log(p);

//.....
// p();

function outest(b){
       var c=20;
       function outer(){
              let m=10;
              function inner(){
                     console.log(m,b,c);
              }
              return inner;
       }
       return outer;
}
let m=60; //It makes no change to the closure its just that we have declared a new variable.

let out=outest("Hello world")();
out();

//Closure is used in data hiding and encapsulation
function counter(){
       var count=0;
       this.increment= function(){
              count++;
              console.log(count);
       }
       this.decrement= function(){
              count--;
              console.log(count);
       }
}

var counter1=new counter();
counter1.increment();
counter1.increment();
counter1.decrement();


for(let i=1;i<=5;i++){
       setTimeout(() => {
              console.log(i);
       }, i*1000);
}
console.log("JAVA")
