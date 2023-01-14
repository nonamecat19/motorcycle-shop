<?php

use core\Core;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
$tableName = 'users';
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


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $fields = ['id', 'login', 'firstName', 'lastName', 'role', 'dateOfBirth'];
        $data = Core::getInstance()::$db->select(tableName: $tableName, fieldsList: $fields);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        break;

    case 'POST':
        $decoded = JWT::decode($jwt, new Key($key, algorithm: 'HS256'));
        if ($decoded->data->role === 'admin' || $decoded->data->role === 'moderator') {
            $data = [
                'login' => $_GET['login'],
                'password' => md5($_GET['password']),
                'firstName' => $_GET['firstName'],
                'lastName' => $_GET['lastName'],
                'role' => $_GET['role'],
                'dateOfBirth' => $_GET['dateOfBirth']
            ];
            Core::getInstance()::$db->insert(tableName: $tableName, newRowArray: $data);
        } else {
            http_response_code(response_code: 403);
        }

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

    case 'PUT':
        $decoded = JWT::decode($jwt, new Key($key, algorithm: 'HS256'));
        if ($decoded->data->role === 'admin' || $decoded->data->role === 'moderator') {
            $id = [
                'id' => $_GET['id']
            ];
            $data = [
                'login' => $_GET['login'],
                'firstName' => $_GET['firstName'],
                'lastName' => $_GET['lastName'],
                'role' => $_GET['role'],
                'dateOfBirth' => $_GET['dateOfBirth']
            ];
            Core::getInstance()::$db->update(tableName: $tableName, newValuesArray: $data, conditionArray: $id);
        } else {
            http_response_code(response_code: 403);
        }
        break;
}