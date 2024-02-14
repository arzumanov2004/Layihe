document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    var storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
        alert("Login successful. Welcome," + username);
        window.location.href = "index.html";
    } else {
        var registerPrompt = confirm("Your record was not found. Would you like to register?");
        if (registerPrompt) {
            window.location.href = "register.html";
        }
        document.getElementById("loginForm").reset();
    }
});