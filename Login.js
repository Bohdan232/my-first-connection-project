document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загружена, скрипт начал работу.");


    
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const form = document.getElementById("registration-form");

    // Загружаем сохраненный email
    emailInput.value = localStorage.getItem("email") || "";

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Остановим отправку формы

        // Сохраняем email и пароль в LocalStorage
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("password", passwordInput.value);

        alert("Registration successful!");
    });
});
