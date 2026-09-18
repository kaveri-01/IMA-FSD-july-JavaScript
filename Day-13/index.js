// console.log("First");
// console.log("Second");
// console.log("Third");

// let a = 10;
// let b = 20;
// let addition = a + b;
// console.log(addition);

// console.log("start");

// for (let i = 0; i < 10000; i++){
//     if (i % 10 === 0){
//         console.log(i);
//     }
// }

// console.log("end");

// console.log("start");

// setTimeout(() =>{
//     console.log("Hello")
// },5000);

// console.log("End");

// function greet ( name, age, callback){
//     console.log("Hello " + name , "myage" + age);
//     callback();
// }

// function bye(){
//     console.log("How are you")
// }

// greet("kaveri", 25,bye);

// setTimeout(() => {
// console.log("Hello");
// }, 3000);

// const myPromise = new Promise((resolve, reject) =>{
//     let success = true;
//     if(success){
//         resolve("Task Completed")
//     } else {
//         reject("Task Failed")
//     }
// })
// console.log(myPromise);

// const myPromise = new Promise((resolve, reject)=>{
//     let success = false;
//     if (success){
//         resolve ("Task Completed")
//     }else {
//         reject ("Task Failed")
//     }
// });

// myPromise .then ((result)=>{
//     console.log(result)
// })
// .catch((error) =>{
//     console.log(error)
// });

// function getData (){
//     return new Promise((resolve, reject ) =>{
//         setTimeout (()=>{
//             resolve("Data Received")
//         },2000)
//     })
// }

// getData()
// .then((data)=>{
//     console.log(data)
// })

// function getData (){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//         resolve ("Data received")
//         }, 2000)
//     })
// }
// async function showData() {
//     const result = await getData();
//     console.log(result)
// }
// showData()

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("User data received");
//     }, 2000);
//   });
// }
// async function showUser() {
//   const user = await getUser();
//   console.log(user);
// }
// showUser();

// function sayHello() {
//   console.log("Hello!");
// }

// function doSomething(callback) {
//   console.log("Before callback");

//   callback();

// }

// doSomething(sayHello);

// function greet ( name, age, callback){
//     console.log("Hello " + name , "myage" + age);
//     callback();
// }

// function bye(){
//     console.log("How are you")
// }

// greet("kaveri", 25,bye);

// setTimeout(() => {
// console.log("Hello");
// }, 3000);

// const promise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Success");
//   } else {
//     reject("Something went wrong");
//   }
// });

// let order = new Promise((resolve, reject) => {
//   let orderPlaced = false;

//   if (orderPlaced) {
//     resolve("Order placed successfully");
//   } else {
//     reject("Order failed");
//   }
// });

// order
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function getData (){
//     return new Promise((resolve, reject ) =>{
//         setTimeout (()=>{
//             resolve("Data Received")
//         },2000)
//     })
// }

// getData()
// .then((data)=>{
//     console.log(data)
// })

// function login(username, password) {
//   return new Promise((resolve, reject) => {

//     if (username === "admin" && password === "1234") {
//       resolve("Login Successful!");
//     } else {
//       reject("Invalid Username or Password");
//     }

//   });
// }

// login("admin", "1234")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.log(error.message);
  }
}
getProducts();
