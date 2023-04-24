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


document.addEventListener('DOMContentLoaded', function () {
  let products = document.querySelector('.products');
  async function fetchProducts(url) {
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);

    for (let i = 0; i < response.length; i++) {
      let description = response[i].description;
      let title = response[i].title;
      products.innerHTML += `
    <div class="product">
      <img src="${response[i].image}" alt="" class="prod-img">
      <h2 class="prod-title">${title.length > 18 ? title.substring(0, 18).concat('...') : title}</h2>
      <h4 class="prod-category">${response[i].category}</h4>
      <p class="prod-description">${description.length > 80 ? description.substring(0, 80).concat('...more') : description}</p>
      <div class="price-cont">
        <h3 class="prod-price">$${response[i].price}</h3>
        <div class="dis-cart-cont">
          <h4 class="prod-rating">${response[i].rating.rate}</h4>
          <a href="#" data-prodId="${response[i].id}" class="add-to-cart"></a>
        </div>
      </div>
    </div>
    `;
  }
  };
  fetchProducts('https://fakestoreapi.com/products');
});




// async function dispProd() {
//   let allProd = await fetch("https://dummyjson.com/products")
//   let response = await allProd.json()
//     console.log(response);



    
    
// }

// dispProd();