// auth.js - Handles member authentication

document.addEventListener("DOMContentLoaded", function () {
    const memberLink = document.getElementById("member-link");
    const logoutButton = document.getElementById("logout");
    const loginSection = document.getElementById("login-section");

    function checkLogin() {
        const isLoggedIn = localStorage.getItem("weatherMember");
        if (isLoggedIn) {
            memberLink.style.display = "inline";
            logoutButton.style.display = "inline";
            if (loginSection) loginSection.style.display = "none";
        } else {
            memberLink.style.display = "none";
            logoutButton.style.display = "none";
        }
    }

    window.login = function () {
        localStorage.setItem("weatherMember", "true");
        alert("Login successful! You now have access to the daily forecast.");
        checkLogin();
    };

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("weatherMember");
        alert("You have been logged out.");
        checkLogin();
    });

    checkLogin();
});
