<?php

header("Access-Control-Allow-Origin: http://localhost/rest-api-authentication-example/");
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

$data = json_decode(file_get_contents("php://input"));
$key = '1234567890';
$jwt = $_GET['jwt'];

if ($jwt)
{
    try
    {
        $decoded = JWT::decode($jwt, new Key($key, algorithm: 'HS256'));
        http_response_code(response_code: 200);
        echo json_encode(array(
            "message" => "Доступ разрешен",
            "data" => $decoded->data
        ));
    }
    catch (Exception $e)
    {
        http_response_code(response_code: 401);
        echo json_encode(array(
            "message" => "Вам доступ закрыт",
            "error" => $e->getMessage()
        ));
    }
}
else
{
    http_response_code(response_code: 401);
    echo json_encode(array("message" => "Доступ запрещён"));
}