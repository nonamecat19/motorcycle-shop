<?php

use core\Core;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
//error_reporting(E_ALL);
//ini_set("display_errors", 1);
$tableName = 'users';


if ($_SERVER['REQUEST_METHOD'] != 'POST')
    return;

$password_hash = md5($_GET['password']);
$data = [
    'login' => $_GET['login'],
    'password' => $password_hash,
    'firstName' => $_GET['firstName'],
    'lastName' => $_GET['lastName'],
    'dateOfBirth' => $_GET['dateOfBirth'],
    'role' => 'user'
];

if (strlen($data['login']) < 4 ||
    strlen($data['password']) < 4 ||
    strlen($data['firstName']) === 0 ||
    strlen($data['lastName']) === 0 ||
    strlen($data['dateOfBirth']) !== 10
) {
    echo 'fields are not valid';
}
else{
    Core::getInstance()::$db->insert(
        tableName: $tableName,
        newRowArray: $data
    );
    echo 'ok';
}

