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