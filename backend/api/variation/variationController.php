<?php

use core\Core;

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

        Core::getInstance()::$db->insert(tableName: 'variation', newRowArray: $data);
        break;

    case 'UPDATE':

        break;

    case 'DELETE':
        $data = ['id' => $_GET['id']];
        Core::getInstance()::$db->delete(tableName: 'variation', conditionArray: $data);
        break;
}