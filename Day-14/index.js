// http methods - get - access Data
// post - send data;
// put /patch - data PaymentRequestUpdateEvent;
// delete - detlete data

// fetch("https://example.com/api/products")
// .then((response) => {
// return response.json();
// })
// .then((data) => {
// console.log(data);
// });

// async function getProducts() {
//   const response = await fetch("https://example.com/api/products");
//   const data = await response.json();
//   console.log(data);
// }
// getProducts();
// async function getProducts() {
//     const response =
// await fetch("https://example.com/api/products");
// const data = await response.json();
// console.log(data);
// }
// getProducts();

// async function getProducts() {
// try {
// console.log("Loading...");
// const response =
// await fetch(
// "https://example.com/api/products"
// );
// if (!response.ok) {
// throw new Error("Failed to fetch data");
// }
// const data = await response.json();
// console.log(data);
// } catch (error) {
// console.log("Error:", error.message);
// }
// }

async function getProducts() {
try {
const response =
await fetch(
"https://fakestoreapi.com/products"
);
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