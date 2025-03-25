<?php
require 'config.php';
session_start();
session_regenerate_id(true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $user = $collection->findOne(["username" => $username]);

    if ($user && $user["password"] === $password) {
        $_SESSION["username"] = $username;
        echo json_encode(["message" => "Inicio de sesión exitoso"]);
    } else {
        echo json_encode(["error" => "Usuario o contraseña incorrectos"]);
    }
}
?>
