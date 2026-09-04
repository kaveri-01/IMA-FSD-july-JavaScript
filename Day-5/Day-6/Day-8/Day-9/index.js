// ("{[()]}") = output = true;

// function isValid (str){
//     let stack = [];
//     let pairs = {
//         ")":"(" ,
//         "]":"[",
//         "}":"{"
//     };
//     for (let i = 0; i < str.length; i++){
//         let char = str[i];
//         if (char === "(" ||
//             char === "[" ||
//             char === "{"
//         ){
//             stack.push(char);
//         }
//         else {
//             let top = stack.pop();
//             if (top !== pairs[char]){
//                 return false
//             }
//         }
//     }
//     return stack.length === 0;
// }
// console.log(isValid("{[()]}"));

// let numbers = [10,20,30,40];
// numbers.forEach(function(num){
//     console.log(num)
// })

// let numbers = [1,2,3,4];
// numbers.forEach(function(num){
//     console.log(num + 2)

// })

// let numbers = [1,2,3,4];
// let result = numbers.map(function(num){
//     return num * 2
// });
// console.log(result);

// let names = ["rahul", "kirti", "priya"];
// let result = names.map(function(name){
//     return name.toUpperCase()
// })
// console.log(result);

// let numbers = [1,2,3,4,5,6];
// let result = numbers.filter(function(num){
//     return num % 2 === 0;
// });
// console.log(result);

// let ages = [15,16,20,25,30];
// let adults = ages.filter(function(age){
//     return age >=18;
// })
// console.log(adults);

// let numbers = [1,2,3,6,8,10,22];
// let result = numbers.find(function(num){
//     return num % 2 === 0;
// })
// console.log(result);

// let numbers = [2,3,6,8,10,22];
//  let result = numbers.find(function(num){
//      return num % 2 === 1;
//  })
//  console.log(result);

// let users = [
//     {id:1, name:"kaveri"},
//     {id:2, name:"shruti"},
//     {id:3, name:"rahul"}
// ];
// let user = users.find(function(user){
//     return user.id === 2
// });
// console.log(user);

// let fruits = ["apple","banana","mango"];
// console.log(fruits.includes("kiwi"));

// let numbers = [10,20,30,40];
// console.log(numbers.includes(50));

// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Keyboard", price: 2000 },
// ];

// const expensiveProducts = products.filter((product) => {
//   return product.price > 2000;
// });
// console.log(expensiveProducts);
