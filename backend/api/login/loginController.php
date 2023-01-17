<?php

include_once "vendor/firebase/php-jwt/src/BeforeValidException.php";
include_once "vendor/firebase/php-jwt/src/ExpiredException.php";
include_once "vendor/firebase/php-jwt/src/SignatureInvalidException.php";
include_once "vendor/firebase/php-jwt/src/JWT.php";

use core\Core;
use \Firebase\JWT\JWT;
$iss = "http://localhost:3000";
$aud = 'http://localhost:8000';
$iat = 1356999524;
$nbf = 1357000000;
$key = '1234567890';

$tableName = 'users';
$userLogin = $_GET['login'];
$userPassword = md5($_GET['password']);
$dataFromDB = Core::getInstance()::$db->select(
    tableName: $tableName,
    conditionArray: ['login' => $userLogin]
)[0];

if (count($dataFromDB) && $dataFromDB['password'] === $userPassword) {
    $token = array(
        "iss" => $iss,
        "aud" => $aud,
        "iat" => $iat,
        "nbf" => $nbf,
        "data" => array(
            "id" => $dataFromDB['id'],
            "login" => $dataFromDB['login'],
            "firstName" => $dataFromDB['firstName'],
            "lastName" => $dataFromDB['lastName'],
            "role" => $dataFromDB['role'],
            "dateOfBirth" => $dataFromDB['dateOfBirth']
        )
    );
    http_response_code(response_code: 200);

    $jwt = JWT::encode(payload: $token, key: $key, alg: 'HS256');
    echo json_encode(
        array(
            "message" => "Successful login.",
            "jwt" => $jwt
        ),
        JSON_UNESCAPED_UNICODE
    );
}

else {
    http_response_code(401);
    echo json_encode(
        array("message" => "Auth Error"),
        JSON_UNESCAPED_UNICODE
    );
}