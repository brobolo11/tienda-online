$(document).ready(function () {
    const loginForm = $("#loginForm");

    // Login
    if (loginForm.length) {
        loginForm.on("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(this);

            $.ajax({
                url: "login.php",
                method: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    const data = JSON.parse(response);
                    if (data.message) {
                        $("#modalMessageContent").text(data.message);
                        $("#messageModal").modal("show");
                        setTimeout(function () {
                            window.location.href = "index.html";
                        }, 2000);
                    } else {
                        $("#modalMessageContent").text(data.error);
                        $("#messageModal").modal("show");
                    }
                }
            });
        });
    }

    // Register
    const registerForm = $("#registerForm");
    if (registerForm.length) {
        registerForm.on("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(this);

            $.ajax({
                url: "register.php",
                method: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    const data = JSON.parse(response);
                    if (data.message) {
                        $("#modalMessageContent").text(data.message);
                        $("#messageModal").modal("show");
                        setTimeout(function () {
                            window.location.href = "login.html";
                        }, 2000);
                    } else {
                        $("#modalMessageContent").text(data.error);
                        $("#messageModal").modal("show");
                    }
                }
            });
        });
    }
});
