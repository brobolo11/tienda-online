<?php
session_start();

if (!isset($_SESSION['username'])) {
    echo json_encode(["success" => false, "message" => "Debes iniciar sesión para añadir productos."]);
    exit();
}

require 'vendor/autoload.php';

$client = new MongoDB\Client("mongodb+srv://bfanvei:Lolitofernandez10@cluster0.3swo1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
$db = $client->selectDatabase("tienda-online");
$collection = $db->cesta;

$username = $_SESSION['username'];

// Verificamos si es un coche
if (isset($_POST['carName'])) {
    $carName = $_POST['carName'];

    $insertResult = $collection->insertOne([
        "username" => $username, 
        "modelo" => $carName
    ]);

    if ($insertResult->getInsertedCount() > 0) {
        echo json_encode(["success" => true, "message" => "Coche añadido a la cesta"]);
        header("Location: modelos.html");
        
    } else {
        echo json_encode(["success" => false, "message" => "Error al añadir el coche"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "No se recibió el nombre del coche"]);
}
?>