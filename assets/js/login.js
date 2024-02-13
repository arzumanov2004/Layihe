document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    var storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
        alert("Giriş başarılı. Hoş geldiniz, " + username);
        window.location.href = "index.html";
    } else {
        var registerPrompt = confirm("Kaydınız bulunamadı. Kayıt olmak ister misiniz?");
        if (registerPrompt) {
            window.location.href = "register.html";
        }
        document.getElementById("loginForm").reset();
    }
});