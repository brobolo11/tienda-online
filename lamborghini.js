$(document).ready(function () {
    // Modal para Urus
    const urusButton = $("#urus");
    const urusModal = new bootstrap.Modal($("#urusModal")[0]);

    urusButton.on("click", function () {
        urusModal.show();
    });

    // Modal para Huracán
    const huracanButton = $("#huracan");
    const huracanModal = new bootstrap.Modal($("#huracanModal")[0]);

    huracanButton.on("click", function () {
        huracanModal.show();
    });

    // Modal para Aventador
    const aventadorButton = $("#aventador");
    const aventadorModal = new bootstrap.Modal($("#aventadorModal")[0]);

    aventadorButton.on("click", function () {
        aventadorModal.show();
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