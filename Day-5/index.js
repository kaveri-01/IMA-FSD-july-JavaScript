// age = 25;
// if (age >= 18){
//     console.log("you are adult")
// }

// let marks = 50;

// if (marks > 50){
//     console.log("youn are pass")
// } else {
//     console.log("you are fail")
// }

// let passwordCorrect = false;
// if (passwordCorrect){
//     console.log("Login Successfull")
// } else {
//     console.log("Login Failed")
// }

// let shoppingAmount = 1000;
// if (shoppingAmount >= 1000){
//     console.log("You got 10% discount")
// } else {
//     console.log("No Discount")
// }

// let marks = 41;

// if (marks >= 90){
//     console.log("Grade A")
// }else if (marks >= 80){
//     console.log("Grade B")
// }else if (marks > 60){
//     console.log("Grade C")
// }else if (marks >= 50){
//     console.log("Grade D")
// }else {
//     console.log("You are Passed")}

// let age = 18;
// let hasLicense = false;
// if (age >= 18 && hasLicense){
//     console.log("You can drive")
// } else {
//     console.log("You cannot drive")
// }
    
// let isAdmin = false;
// let isManager = false;

// if (isAdmin || isManager) {
//     console.log("Access granted");
// } else {
//     console.log("Access denied");
// }

// let isLoggedIn = false;

// if (!isLoggedIn) {
//     console.log("Please login");
// }

// nested if

// let age = 25;
// let hasLicense = true;

// if (age >= 18) {

//     if (hasLicense) {
//         console.log("You can drive");
//     }

// }

// let usernameCorrect = true;
// let passwordCorrect = false;

// if (usernameCorrect) {

//     if (passwordCorrect) {
//         console.log("Login successful");
//     }else  {
//         console.log("Enter valid details")
//     }

// } 

// let username = " ";

// if (username) {
//     console.log("Username exists");
// } else {
//     console.log("username not exist")
// }

// let value = true;

// if (value) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }

// let age = 20 ;

// let isAdult = age >= 20 ? "Yes" : "No";

// console.log(isAdult);

// let username = "admin";
// let password = "12345";

// if (username === "admin" && password === "1234") {
//     console.log("Login successful");
// } else {
//     console.log("Invalid credentials");
// }

// let balance = 2000;
// let withdrawal = 3000;

// if (withdrawal <= balance) {
//     balance = balance - withdrawal; 

//     console.log("Withdrawal successful");
//     console.log("Remaining balance:", balance);
// } else {
//     console.log("Insufficient balance");
// }

// let age = 60;

// if (age < 13) {

//     console.log("Child");

// } else if (age < 18) {

//     console.log("Teenager");

// } else if (age <= 60) {

//     console.log("Adult");

// } else {
//     console.log("Senior Citizen");
// }

// let marks = 65;

// if (marks >= 90) {

//     console.log("A");

// } else if (marks >= 60) {

//     console.log("B");

// } else {
//     console.log("C");
// }

// let loggedIn = true;

// if (!loggedIn) {
//     console.log("Please login");
// } else {
//     console.log("logged in")
// }


let username = "admin";
let password = "1234";
let isAccountActive = true;
isAdmin = true;

if (username === "admin" && password && "1234" && isAccountActive === true){
    console.log("Login Successfull");
    console.log("Access granted");

    if (isAdmin === true){
        console.log("Admin Dashboard")
    }
}else{
     console.log("Login failed");
    console.log("Access denied")
}