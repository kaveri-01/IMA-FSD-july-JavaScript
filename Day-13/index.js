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

// function greet (name, callback){
//     console.log("Hello " + name);
//     callback();
// }
// function bye(){
//     console.log("How are you")
// }
// greet("kaveri",bye);

// setTimeout(() => {
// console.log("Hello");
// }, 2000);

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

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data received");
    }, 2000);
  });
}
async function showUser() {
  const user = await getUser();
  console.log(user);
}
showUser();
