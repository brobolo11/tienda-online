$(document).ready(function () {
    // Modal para DB12
    const db12Button = $("#db12");
    const db12Modal = new bootstrap.Modal($("#db12Modal")[0]);

    db12Button.on("click", function () {
        db12Modal.show();
    });

    // Modal para DBX
    const dbxButton = $("#dbx");
    const dbxModal = new bootstrap.Modal($("#dbxModal")[0]);

    dbxButton.on("click", function () {
        dbxModal.show();
    });

    // Modal para Vantage
    const vantageButton = $("#vantage");
    const vantageModal = new bootstrap.Modal($("#vantageModal")[0]);

    vantageButton.on("click", function () {
        vantageModal.show();
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