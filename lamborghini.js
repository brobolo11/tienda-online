document.addEventListener("DOMContentLoaded", function () {
    const urusButton = document.getElementById("urus");
    const urusModal = new bootstrap.Modal(document.getElementById("urusModal"));

    urusButton.addEventListener("click", function () {
        urusModal.show();
    });
});
