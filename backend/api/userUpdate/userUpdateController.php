<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once "vendor/firebase/php-jwt/src/BeforeValidException.php";
include_once "vendor/firebase/php-jwt/src/ExpiredException.php";
include_once "vendor/firebase/php-jwt/src/SignatureInvalidException.php";
include_once "vendor/firebase/php-jwt/src/JWT.php";
include_once "vendor/firebase/php-jwt/src/Key.php";

use core\Core;
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

$key = '1234567890';
$jwt = $_GET['jwt'];

if ($jwt) {
    try {
        $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
        $iss = "http://localhost:3000";
        $aud = 'http://localhost:8000';
        $iat = 1356999524;
        $nbf = 1357000000;

        $updateData = [
            'id' => $decoded->data->id,
            'login' => $_GET['login'],
            'firstName' => $_GET['firstName'],
            'lastName' => $_GET['lastName'],
            'role' => $_GET['role'],
            'dateOfBirth' => $_GET['dateOfBirth']
        ];

        if (update($updateData)) {
            $token = array(
                "iss" => $iss,
                "aud" => $aud,
                "iat" => $iat,
                "nbf" => $nbf,
                "data" => $updateData
            );
            $jwt = JWT::encode($token, $key, 'HS256');
            http_response_code(200);
            echo json_encode(
                array(
                    "message" => "Користувач оновлений успішно",
                    "jwt" => $jwt
                )
            );
        } else {
            http_response_code(401);
            echo json_encode(array("message" => "Неможливо оновити корстувача"));
        }
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(array(
            "message" => "Доступ закрыт",
            "error" => $e->getMessage()
        ));
    }
}
else {
    http_response_code(401);
    echo json_encode(array("message" => "Доступ заборонено"));
}


function update($data): bool
{
    $tableName = 'users';
    try {
        Core::getInstance()::$db->update(
            tableName: $tableName,
            newValuesArray: $data,
            conditionArray: ['id' => $data['id']]
        );
        return true;
    }catch (Exception $e) {
        return false;
    }
}