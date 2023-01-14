<?php

use core\Core;

$tableName = 'comments';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

error_reporting(E_ALL);
ini_set("display_errors", 1);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $result = Core::getInstance()::$db->select(
            tableName: $tableName,
            conditionArray: ['idMotorcycle' => $_GET['idMotorcycle']]
        );
        echo json_encode($result);
        break;

    case 'POST':
        $key = '1234567890';
        $jwt = $_GET['jwt'];
        $decoded = JWT::decode($jwt, new Key($key, algorithm: 'HS256'));
        $userName = $decoded->data->firstName.' '.$decoded->data->lastName;

        $data = [
            'userName' => $userName,
            'text' => $_GET['text'],
            'idMotorcycle' => $_GET['idMotorcycle'],
        ];

        Core::getInstance()::$db->insert(
            tableName: $tableName,
            newRowArray: $data
        );

        break;
}