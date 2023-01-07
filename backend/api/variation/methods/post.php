<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') die;
include '../../../Core/Core.php';

use core\Core;

$data = [
    'idMotorcycle' => $_POST['idMotorcycle'],
    'colorName' => $_POST['colorName'],
    'colorHex' => $_POST['colorHex'],
    'colorHex2' => $_POST['colorHex2'],
    'available' => $_POST['available'],
    'photo' => $_POST['photo']
];

Core::getInstance()::$db->insert(tableName: 'variation', newRowArray: $data);


