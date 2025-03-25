$(document).ready(function () {
    // Modal para Veyron
    const veyronButton = $("#veyron");
    const veyronModal = new bootstrap.Modal($("#veyronModal")[0]);

    veyronButton.on("click", function () {
        veyronModal.show();
    });

    // Modal para Tourbillon
    const tourbillonButton = $("#tourbillon");
    const tourbillonModal = new bootstrap.Modal($("#tourbillonModal")[0]);

    tourbillonButton.on("click", function () {
        tourbillonModal.show();
    });

    // Modal para Voiture
    const voitureButton = $("#voiture");
    const voitureModal = new bootstrap.Modal($("#voitureModal")[0]);

    voitureButton.on("click", function () {
        voitureModal.show();
    });
});


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

$(document).ready(function () {
    $(".añadirCesta").on("click", function () {
        const carName = $(this).data("car");

        // Peticion AJAX para obtener el username de la sesión
        $.ajax({
            url: "getSession.php",
            type: "GET",
            dataType: "json",
            success: function (response) {
                if (response.username) {
                    // Si el usuario está logueado, enviar datos a mongo
                    $.ajax({
                        url: "añadirCarrito.php",
                        type: "POST",
                        data: {
                            carName: carName
                        },
                        success: function (data) {
                            if (data.success) {
                                alert("Coche añadido a la cesta correctamente.");
                            } else {
                                alert("Error al añadir a la cesta.");
                            }
                        },
                        error: function (err) {
                            alert("Error al añadir a la cesta.");
                        }
                    });
                } else {
                    alert("Debes iniciar sesión para añadir un coche a la cesta.");
                }
            },
            error: function () {
                alert("Error al obtener la sesión del usuario.");
            }
        });
    });
});