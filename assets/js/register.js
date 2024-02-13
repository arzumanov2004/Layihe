document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var firstName = document.getElementById("regFirstName").value;
    var lastName = document.getElementById("regLastName").value;
    var username = document.getElementById("regUsername").value;
    var password = document.getElementById("regPassword").value;

    var user = {
        password: password,
        firstName: firstName,
        lastName: lastName
    };

    localStorage.setItem(username, JSON.stringify(user));
    
    alert("Kaydınız başarıyla tamamlandı. Şimdi giriş yapabilirsiniz.");
    window.location.href = "login.html";
    
    document.getElementById("registerForm").reset();
});