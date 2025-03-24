<?php
require 'vendor/autoload.php';

$client = new MongoDB\Client("mongodb+srv://bfanvei:Lolitofernandez10@cluster0.3swo1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
$db = $client->selectDatabase("tienda-online");
$collection = $db->selectCollection("login");
?>