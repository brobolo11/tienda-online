$(document).ready(function () {
    // Modal para Spider
    const spiderButton = $("#spider");
    const spiderModal = new bootstrap.Modal($("#spiderModal")[0]);

    spiderButton.on("click", function () {
        spiderModal.show();
    });

    // Modal para Tourbillon
    const romaButton = $("#roma");
    const romaModal = new bootstrap.Modal($("#romaModal")[0]);

    romaButton.on("click", function () {
        romaModal.show();
    });

    // Modal para competizione
    const competizioneButton = $("#competizione");
    const competizioneModal = new bootstrap.Modal($("#competizioneModal")[0]);

    competizioneButton.on("click", function () {
        competizioneModal.show();
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