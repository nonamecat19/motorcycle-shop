<?php
include '../../Core/Core.php';
use core\Core;

$params = [
    'model' => $_POST['model'],
    'brand' => $_POST['brand'],
    'price' => $_POST['price'],
    'engineCapacity' => $_POST['engineCapacity'],
    'enginePower' => $_POST['enginePower'],
    'fuelConsumption' => $_POST['fuelConsumption'],
        'fuelCapacity' => $_POST['fuelCapacity'],
    'gears' => $_POST['gears'],
    'mass' => $_POST['mass'],
];

Core::getInstance()::$db->insert(tableName: 'motorcycles', newRowArray: $params);
