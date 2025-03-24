document.addEventListener("DOMContentLoaded", function () {
    // Botón de usuario
    const userIcon = document.querySelector(".bi-person");

    if (userIcon) {
        userIcon.addEventListener("click", function () {
            window.location.href = "logout.php";
        });
    }
});
