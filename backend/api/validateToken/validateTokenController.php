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

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

$key = '1234567890';
$jwt = $_GET['jwt'];

if ($jwt)
{
    try
    {
        $decoded = JWT::decode($jwt, new Key($key, algorithm: 'HS256'));
        http_response_code(response_code: 200);
        echo json_encode($decoded->data);
    }
    catch (Exception $e)
    {
        http_response_code(response_code: 401);
    }
}
else
{
    http_response_code(response_code: 401);
}