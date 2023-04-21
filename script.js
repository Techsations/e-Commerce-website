let loading = document.getElementById("loader");
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let signUpMsg = document.getElementById("signup-msg");
loading.style.display = "none";


function logInPage() {
  window.location.href = "signin.html";
}

let storage = JSON.parse(localStorage.getItem("myUsers"));

function submit() {
    // ev.preventDefault();

    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Please fill all the neccessary details")
    } else if (password.value.length < 8) {
        alert("Password must be at least 8 characters long")
    } else {
        let users = {
            email: email.value,
            username: username.value,
            password: password.value,
        }
        if (storage === null) {
          let storage = [];
          storage.push(users);
          localStorage.setItem("myUsers", JSON.stringify(storage));
          console.log(typeof(storage));
      } else {
          storage.push(users);
          localStorage.setItem("myUsers", JSON.stringify(storage));
      }
      signUpMsg.innerHTML = `
          <p id="success-msg">Sign up successful!!!</p>
          `
      loading.style.display = "block";

      setTimeout(() => {
        window.location.href = "signin.html";
        loading.style.display = "none";
        signUpMsg.style.display = 'none';
    }, 3000);

    username.value = "";
    email.value = "";
    password.value = "";

    console.log(email.value);
    console.log(username.value);
    console.log(password.value);
      }
    }