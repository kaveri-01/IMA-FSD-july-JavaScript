// const users = [
//   {
//     name: "kaveri",
//     age: 24,

//   },
//   {
//     name : "Rahul",
//     age : 23
//   },
//   {
//     name : "priya",
//     age : 21
//   },
//   {
//     name : "anjali",
//     age : 23
//   },
// ];
// console.log(users);

// const products = [
//     {
//         id : 1,
//         name : "Laptop",
//         price : 50000
//     },
//     {
//         id : 2,
//         name : "Phone",
//         price : 5000
//     }
// ]
// console.log(products[0].id);

// const users = [
//     {name : "kaveri", age : "25"},
//      {name : "priya", age : "25"},
//       {name : "rahul", age : "25"}
// ]
// for (let i = 0; i < users.length; i++){
//     console.log(users[i].name)
// }

// for (const user of users){
//     console.log(user.name)
// }

// users.forEach((user) => {
//     console.log(user.age)
// })

// const users = [
//     {name : "kaveri", age : "25"},
//      {name : "priya", age : "25"},
//       {name : "rahul", age : "25"}
// ]
// const names = users.map((user)=>{
//     return user.name
// })
// console.log(names);


//  const users = [
//      {name : "kaveri", age : "25"},
//      {name : "priya", age : "15"},
//       {name : "rahul", age : "55"}
//  ]

//  const adults = users.filter((user) =>{
//     return user.age >= 18;
//  })
// console.log(adults);
// const products = [
//     {
//         name : "laptop",
//         price  :30000
//     },
//     {
//         name : "laptop",
//         price  :20000
//     },
//     {
//         name : "laptop",
//         price  :40000
//     }
// ]
// const expensive = products.filter((product)=>{
//     return product.price > 10000
// })
// console.log(expensive);

// const products = [
//     {
//         name : "laptop",
//         active  :true
//     },
//     {
//         name : "laptop",
//         active  :false
//     },
//     {
//         name : "laptop",
//         active  :true
//     }
// ]
const products = [
    {
        name : "Tv",
        price  :30000,
        category : "coding"
    },
    {
        name : "laptop",
        price  :20000,
        category: "gaming"
    },
    {
        name : "laptop",
        price  :40000,
        category : "coding"
    }
]
const expensive = products.filter((product)=>{
    return product.category === "coding"
})
console.log(expensive)