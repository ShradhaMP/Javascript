//Two issues with callback is
//1. Callback hell ---> When we nest multiple callbacks within a callback.Its also called pyramid of DOOM
//2.Inversion Control -->We loose the control of our code and it is difficult to maintain

//PROMISES
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Consume Promise
const github = "https://api.github.com/users/ShradhaMP";
const user = fetch(github); //fetch behaves like a promise here
console.log(user);

user.then(function (data) {
  console.log(data);
});

//Promise Chaining
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  });

//Creating Promise
//We attach the callback function to the promise object
const cart = ["shoes", "tops"];

createOrderApi(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return paymentOrder(orderId);
  })
  .then(function ({ message, amt }) {
    console.log(message, amt);
    return showOrderSummary(amt);
  })
  .then(function ({message,amt}) {
    console.log(message,amt);
  })
  .catch(function(message){
       console.log(message);
  })
  .then(function () {
    return updateWallet();
  })
  .then(function (data) {
    console.log(data);
  });

// Always return a value in the promise chain for the next .then to use .
//.catch() only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what

function createOrderApi(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Invalid Cart");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function paymentOrder(orderId) {
  return new Promise(function (resolve, reject) {
    resolve({
      message: `Payment is successfull for orderID:${orderId}`,
      amt: 2500,
    });
  });
}

function showOrderSummary(amt) {
  return new Promise(function (resolve, reject) {
    if (amt >= 2000) {
      resolve({ message: "Purchase cost is", amt: `${amt}` });
    } else {
      reject({message:"Buy more for discount"});
    }
  });
}

function updateWallet() {
  return new Promise(function (resolve, reject) {
    resolve("updated wallet");
  });
}

function validateCart(cart) {
  return true;
}


//async --> is a keyword used to create a async function
//async function always returns a promise, if we return value in that case it wraps value in promise and then returns

const p=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve("Resolved it")
  },10000);
})

async function getData(){
  return p;
}

const data = getData();
data.then((res)=>console.log(res));
//Here in this case JS engine will not wait for promise to be resolved and execute the next line
console.log("Javascript promise");


//await is used only inside the async function
//await is written in front of promise to resolve it

const pro1=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve("Await resolved");
  },5000)
});

const pro2=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve("Await resolved");
  },10000)
});

async function trial(){
  const data=await pro1;
  //JS engine will wait for the promise to be resolved before moving to the next line
  console.log("Javascript");
  console.log(data);

  const data1=await pro2;
  console.log("Javascript");
  console.log(data1);
}

trial();


const githubApi = "https://api.github.com/users/ShradhaMP";


//To handle the error in async await we use try-catch block
async function handleFetch(){
  try{
    const data = await fetch(githubApi);
    const jsonValue=await data.json();
    console.log(jsonValue);
  }
  catch(err){
    console.log(err)
  }
}

handleFetch();


//Promise API's
//1.Promise.all(iterable) rejects as a whole if any promise rejects. That’s good for “all or nothing” 
//2.Promise.allSettled(iterable) just waits for all promises to settle, regardless of the result
//3.Promise.race waits only for the first settled promise and gets its result or error
//4.Promise.any waits only for the first fulfilled promise and gets its result.

const p1=new Promise(function(resolve,reject){
  setTimeout(()=>resolve('P1 Success'),3000)
});

const p2=new Promise(function(resolve,reject){
  // setTimeout(()=>resolve("P2 Fail"),1000)
  setTimeout(()=>reject("P2 Fail"),2000)
});

const p3=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P3 Success"),1000)
});

Promise.race([p1,p2,p3])
.then((res)=>console.log(res))
.catch((err)=>console.error(err))
