let user={
       name:"Shraddha",
       age:21
}
console.log(user.name);
// console.log(user.address); -->Gives error in ts but its perfectly correct in js and returns undefined

const message="Hello world!"
message.toLowerCase();
// message(); -->Gives error as message is not a function

//Type annotation
let branch:string="CSE";

//Type infernece
let num=20; //Type is inferred as number


//Functions
//When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. 
function addTwo(num:number):number{
       return num+2;
}
addTwo(5);

function getUpper(val:string):string{
       return val.toUpperCase();
}

getUpper("shraddha");

function signupUser(name:string,email:string,isPaid:boolean=false){}
signupUser("sh","sh@gma.com",true);
signupUser("sh","sh@gma.com");

function consoleError(errmsg:string):void{
       console.log(errmsg); 
}

function handleError(errmsg:string):never{
       throw new Error(errmsg);
}

//Objects
function createUser({name:string,isPaid:boolean}){}

createUser({name:"shraddha",isPaid:false});
let usr={
       name:"shrd",
       isPaid:true,
       email:"shrd@gmail.com"
}
createUser(usr);

const color=["red","green","blue"];
color.map((x)=>{
       return  `the color is ${x}`;
})

//Tyoe Aliases
type User={
       name:string,
       age:number,
       email:string
}

function addUser(user:User):User{
       return {name:"shrd",age:21,email:"shrd@g.com"}
}

addUser({name:"shrd",age:21,email:"shrd@g.com"});

type point={
       x:number,
       y:number;
}

function printCord(pt:point){
       console.log("The x coordinate is"+pt.x);
       console.log("The y coordinate is"+pt.y);
}
printCord({x:2,y:3})

//readonly
type Usr={
       readonly _id:number,
       name:string,
       creditCard?:string //Optional can assign or not will not give any error
}
let getUSer:Usr={
       _id:12345,
       name:"shan",
}
getUSer.name="shein"
// getUSer._id=3435 -->Cannot assign because its the read only property

type cardNumber={
       carnum:number
}
type cardDate={
       carddate:string
}

//Combining more then one type
type cardDetails=cardDate & cardNumber &{
       cvv:number
}

//Arrays
const numbers:number[]=[];
const fruits:string[]=[];

numbers.push(1)
fruits.push("bannana")

type creditanls={
       name:string,
       dob:string,
       age:number
}

const credDetail:creditanls[]=[];
credDetail.push({name:"dheeraj",dob:"25/10/2001",age:20})

//union types
let score:number|string =33;
score="33"

type sign={
       name:string,
       isActive:boolean
}
type admin={
       userName:string,
       isActive:boolean
}

let srd:sign|admin={name:"shradhha",isActive:false}
srd={userName:"srd02",isActive:true}

function getDb(id:number|string){
       if(typeof id==="string")
              id.toLowerCase();
       else
              id.toExponential();
}
getDb(2);
getDb("2");

const data:(number|string|boolean)[]=[1,2,"red",true];

let pi:3.142=3.142;
// pi=3.1425 -->error

let seatAlloment:"asile"|"window"|"middle";
seatAlloment="asile"
// seatAlloment="crew" -->error

//tuples
let newUSer:[string,number,boolean]=["sr",32,true];
let rgb:[number,number,number]=[255,255,255];

type us=[name:string,email:string];

let myuser:us=["srd","srd@gmail.com"]

myuser[1]="rd@yahoo.com"

const testArray:[number, string] = [10, 'test']; 
testArray.push('test');



export {}
