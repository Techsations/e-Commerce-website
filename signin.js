let loading = document.getElementById("loader");
let userLogin = document.getElementById('userLogin');
let passLogin = document.getElementById('passLogin');

loading.style.display = "none";

function signUpPage() {
    window.location.href = "index.html";
}

let storage = JSON.parse(localStorage.getItem("myUsers"));
console.log(storage);

function logIn() {
    // ev.preventDefault();
    let authorizedUser = storage.find((el)=> el.username == userLogin.value && el.password == passLogin.value);
    console.log(authorizedUser);
    loading.style.display = "block";
    if (!authorizedUser) {
        setTimeout(() => {
            loading.style.display = "none";
        }, 2900);
        setTimeout(() => {
            alert("User Information Incorrect");
        }, 3000);
    }else {
        localStorage.setItem("CU", JSON.stringify(authorizedUser));
        setTimeout(() => {
            loading.style.display = "none";
            location.href = "dashboard.html";
        }, 3000);
    }
}