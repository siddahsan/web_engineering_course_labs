const login = document.getElementById("login")
const logout = document.getElementById("logout")

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("isLoggedIn")) {
        displayLoggedInUI()
    }
})

function Login(username, password) {
    if (username === "ahsan" && password === "1234") {
        localStorage.setItem("isLoggedIn", true)
        displayLoggedInUI()
        document.getElementById("logout").style.display = "inline-block";
    } else {
        document.getElementById("message").textContent = "Wrong credentials. Please try again.";
        document.getElementById("message").style.display = "block";
    }
}


function displayLoggedInUI(){
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("logout").style.display = "inline-block";
    document.getElementById("message").textContent = "You have successfully logged in.";
    document.getElementById("message").style.color = "green";
    document.getElementById("message").style.display = "block";
}

login.onclick = function(){
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    Login(username.value, password.value)
}

function displayLoggedOutUI() {
    document.getElementById("loginForm").style.display = "inline-block";
    document.getElementById("logout").style.display = "none";
}

logout.onclick = displayLoggedOutUI