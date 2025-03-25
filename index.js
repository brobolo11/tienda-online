$(document).ready(function () {
    $("#logoLogin").on("click", function () {
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

    // Verificar sesión antes de redirigir a la cesta
    $("#logoCesta").on("click", function () {
        $.ajax({
            url: "verificar-sesion.php",
            type: "GET",
            success: function (response) {
                if (response === "1") {
                    window.location.href = "cesta.html";
                } else {
                    alert("Debes iniciar sesión para ver tu cesta.");
                    window.location.href = "login.html";
                }
            },
            error: function () {
                console.error("Error al verificar la sesión.");
            }
        });
    });
});
