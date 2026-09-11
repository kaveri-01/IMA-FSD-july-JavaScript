// // let name = "kaveri";
// // console.log("Hello" + name);

// // let name = "kaveri";
// // console.log(`Hello ${name}`);

// // let a = 10;
// // let b = 20;
// // console.log(`addition is ${a + b}`)

// let numbers = [10,20,30];

// console.log(numbers[0]);

// let numbers = [10,20,30];
// let [ten, second, third] = numbers;
// console.log(ten);

// const student = {
//   name: "Rahul",
//   age: 22,
// };
// const { name, age } = student;
// console.log(name);
// console.log(age);

// const colors = ["Red", "Blue", "Green"];
// const [red, second, third] = colors;
// console.log(red);
// console.log(second);
// console.log(third)

// let numbers1 = [1,2,3];
// let numbers2 = [4,5,6];

// let allNumbers = [...numbers1, ...numbers2]
// console.log(allNumbers)

// let user = {
//     name : "kaveri",
//     age  : 25
// };

// let newUser = {
//     ...user,
//     city : "thane"
// };
// console.log(newUser);

// function add (...numbers){
//     console.log(numbers)
// }
// add(10,20,30);

// function showNames (first,two, ...remaining){
//    console.log(first);
//    console.log(remaining)
// }
// showNames("A","B","c","D");

// function greet (name){
//     console.log(`Hello ${name}`)
// }
// greet();

// const user = {
//   name: "Rahul",
//   city: "Mumbai",
// };
// const { name, city } = user;
// console.log(`Welcome ${name} from ${city}`);

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2

// console.log("Start");

// for (let i = 0; i < 10000000; i++) {
//     if (i % 100 === 0) {
//         console.log("Current value:", i);
//     }
// }

// console.log("End");