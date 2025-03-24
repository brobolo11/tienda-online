<?php
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Verificar si el usuario ya existe
    $existingUser = $collection->findOne(["username" => $username]);
    if ($existingUser) {
        echo json_encode(["error" => "El usuario ya existe"]);
        exit;
    }

    // Insertar usuario
    $collection->insertOne([
        "username" => $username,
        "password" => $password
    ]);

    echo json_encode(["message" => "Usuario registrado con éxito"]);
}
?>
