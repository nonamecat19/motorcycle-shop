<?php

use core\Core;

$tableName = 'variation';

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $data = [
            'idMotorcycle' => $_GET['idMotorcycle'],
            'colorName' => $_GET['colorName'],
            'colorHex' => $_GET['colorHex'],
            'colorHex2' => $_GET['colorHex2'],
            'available' => $_GET['available'],
            'photo' => $_GET['photo']
        ];

        Core::getInstance()::$db->insert(tableName: $tableName, newRowArray: $data);
        break;

    case 'PUT':
        $id = [
            'id' => $_GET['id']
        ];
        $data = [
            'idMotorcycle' => $_GET['idMotorcycle'],
            'colorName' => $_GET['colorName'],
            'colorHex' => $_GET['colorHex'],
            'colorHex2' => $_GET['colorHex2'],
            'available' => $_GET['available'],
            'photo' => $_GET['photo']
        ];
        Core::getInstance()::$db->update(tableName: $tableName, newValuesArray: $data, conditionArray: $id);
        break;

    case 'DELETE':
        $data = ['id' => $_GET['id']];
        Core::getInstance()::$db->delete(tableName: $tableName, conditionArray: $data);
        break;
}