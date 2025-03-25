$(document).ready(function () {
    $(".bi-person").on("click", function () {
        $.ajax({
            url: "logout.php",
            type: "GET",
            success: function (data) {
                window.location.href = "login.html";
            },
            error: function (xhr, status, error) {
                console.error("Error al cerrar sesión: ", error);
            }
        });
    });
});
