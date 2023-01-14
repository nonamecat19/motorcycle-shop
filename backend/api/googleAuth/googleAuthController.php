<?php

use core\Core;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");

include_once "vendor/firebase/php-jwt/src/BeforeValidException.php";
include_once "vendor/firebase/php-jwt/src/ExpiredException.php";
include_once "vendor/firebase/php-jwt/src/SignatureInvalidException.php";
include_once "vendor/firebase/php-jwt/src/JWT.php";
//error_reporting(E_ALL);
//ini_set("display_errors", 1);
use \Firebase\JWT\JWT;

$tableName = 'users';
$key = '1234567890';

$aud = 'http://localhost:8000';
$iss = "http://localhost:3000";
$nbf = 1357000000;
$iat = 1356999524;

if ($_SERVER['REQUEST_METHOD'] != 'POST')
    return;

$password_hash = md5($_GET['password']);
$data = [
    'login' => $_GET['login'],
    'password' => $password_hash,
    'firstName' => $_GET['firstName'],
    'lastName' => $_GET['lastName'],
    'dateOfBirth' => '2000-01-01',
    'role' => 'user'
];
try{
    Core::getInstance()::$db->insert(
        tableName: $tableName,
        newRowArray: $data
    );
} catch (Exception $e){}

$dataFromDB = Core::getInstance()::$db->select(
    tableName: $tableName,
    conditionArray: [
        'login' => $_GET['login']
    ]
)[0];

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
        "dateOfBirth" => $dataFromDB['dateOfBirth'],
        "role" => $dataFromDB['role']
    )
);

$jwt = JWT::encode(
    payload: $token,
    key: $key,
    alg: 'HS256'
);

echo json_encode(
    array(
        "message" => "Success.",
        "jwt" => $jwt
    ),
    flags: JSON_UNESCAPED_UNICODE
);


