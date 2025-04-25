// JS_iniciosesion.js - Lógica básica de validación de login (modo demo)
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");
  
    // Simulación de credenciales válidas
    if (username === "admin" && password === "1234") {
      window.location.href = "/Pro-Agro/Sitios/Inicio.html"; // Redirige a la página principal
    } else {
      errorMsg.textContent = "Usuario o contraseña incorrectos.";
      errorMsg.style.display = "block";
    }
  });