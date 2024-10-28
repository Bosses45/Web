function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "291006") {
        window.location.href = "page2.html";
    }
    else {
        alert("Password salah. Silakan coba lagi.");
    }
}