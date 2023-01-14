<?php

use core\Core;

//error_reporting(E_ALL);
//ini_set("display_errors", 1);

include_once "vendor/firebase/php-jwt/src/BeforeValidException.php";
include_once "vendor/firebase/php-jwt/src/ExpiredException.php";
include_once "vendor/firebase/php-jwt/src/SignatureInvalidException.php";
include_once "vendor/firebase/php-jwt/src/JWT.php";
include_once "vendor/firebase/php-jwt/src/Key.php";

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

$key = '1234567890';
$jwt = $_GET['jwt'];

$tableName = 'variation';

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $decoded = JWT::decode($jwt, new Key($key, algorithm: 'HS256'));
        if ($decoded->data->role === 'admin' || $decoded->data->role === 'moderator') {
            $tmpName = $_FILES['file']['tmp_name'];
            do {
                $name = uniqid() . '.png';
                $path = 'data/' . $name;
            } while (file_exists($path));
            move_uploaded_file($tmpName, $path);
            $data = [
                'idMotorcycle' => $_GET['idMotorcycle'],
                'colorName' => $_GET['colorName'],
                'colorHex' => $_GET['colorHex'],
                'colorHex2' => $_GET['colorHex2'],
                'available' => $_GET['available'],
                'photo' => $name
            ];
            Core::getInstance()::$db->insert(tableName: $tableName, newRowArray: $data);
        } else {
            http_response_code(response_code: 403);
        }
        break;

    case 'PUT':
//        $decoded = JWT::decode($jwt, new Key($key, algorithm: 'HS256'));
//        if ($decoded->data->role === 'admin' || $decoded->data->role === 'moderator') {
            $photo = null;
            if ($_FILES['file']) {
                do {
                    $name = uniqid() . '.png';
                    $path = 'data/' . $name;
                } while (file_exists($path));
                move_uploaded_file($_FILES['file']['tmp_name'], $path);
                unlink('data/' . $_GET['photo']);
                $photo = $name;
            } else {
                $photo = $_GET['photo'];
            }
            $id = [
                'id' => $_GET['id']
            ];
            $data = [
                'idMotorcycle' => $_GET['idMotorcycle'],
                'colorName' => $_GET['colorName'],
                'colorHex' => $_GET['colorHex'],
                'colorHex2' => $_GET['colorHex2'],
                'available' => $_GET['available'],
                'photo' => $photo
            ];
            Core::getInstance()::$db->update(tableName: $tableName, newValuesArray: $data, conditionArray: $id);
//        } else {
//            http_response_code(response_code: 403);
//        }
        break;

    case 'DELETE':
        $decoded = JWT::decode($jwt, new Key($key, algorithm: 'HS256'));
        if ($decoded->data->role === 'admin' || $decoded->data->role === 'moderator') {
            $data = ['id' => $_GET['id']];
            Core::getInstance()::$db->delete(tableName: $tableName, conditionArray: $data);
        } else {
            http_response_code(response_code: 403);
        }
        break;
}