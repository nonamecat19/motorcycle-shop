<?php

use core\Core;

include_once "vendor/firebase/php-jwt/src/BeforeValidException.php";
include_once "vendor/firebase/php-jwt/src/ExpiredException.php";
include_once "vendor/firebase/php-jwt/src/SignatureInvalidException.php";
include_once "vendor/firebase/php-jwt/src/JWT.php";
include_once "vendor/firebase/php-jwt/src/Key.php";

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

//error_reporting(E_ALL);
//ini_set("display_errors", 1);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        break;

    case 'POST':
        $tableName = 'variation';
        $key = '1234567890';
        $jwt = $_GET['jwt'];
        $decoded = JWT::decode($jwt, new Key($key, algorithm: 'HS256'));

        $json = json_decode($_GET['data'], true);
        for ($i = 0; $i < count($json); $i++) {
            $myData = $json[$i];
            $select = Core::getInstance()::$db->select(
                tableName: $tableName,
                fieldsList: 'available',
                conditionArray: ['id' => $myData[1]]
            );
            $select = intval($select[0]['available']) - $myData[2];
            Core::getInstance()::$db->update(
                tableName: $tableName,
                newValuesArray: ['available' => $select],
                conditionArray: ['id' => $myData[1]]
            );
        }

        $data = [
            'fullPrice' => $_GET['fullPrice'],
            'idUser' => $decoded->data->id,
            'date' => strval(date("Y-m-d H:i:s")),
            'shopNum' => $_GET['shopNum'],
        ];

        Core::getInstance()::$db->insert(
            tableName: 'orders',
            newRowArray: $data
        );
        break;
}