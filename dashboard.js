// import { user } from "./script.js";

let dashboardWelcome = document.getElementById("welcome");
// dashboardWelcome.innerHTML = `<h1 class="dashboard-welcome"> Welcome, ${user.username}! <h1>`;


// Get the welcome div and the logout button
let welcomeDiv = document.getElementById("welcome");
let logoutBtn = document.getElementById("logout-btn");

// Get the current user information from localStorage
let user = JSON.parse(localStorage.getItem("CU"));

// If there is no current user, redirect to the login page
if (!user) {
    window.location.href = "index.html";
  }

// Display the welcome message with the current user's name
dashboardWelcome.innerHTML = `Welcome to Shoppy, ${user.username}!`;

// Handle the logout process
// logoutBtn.addEventListener("click", () => {
//   // Remove the current user from localStorage and redirect to the login page
//   localStorage.removeItem("user");
//   window.location.href = "signin.html";
// });

// Fetch data from API

let showProducts = document.getElementById("showProducts");

async function dispProd() {
  let allProd = await fetch("https://dummyjson.com/products")
  let products = await allProd.json()
    console.log(products);
}

dispProd();