<?php
use core\Core;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
error_reporting(E_ALL);
ini_set("display_errors", 1);

$tableName = 'users';

$password_hash = md5($_GET['password']);
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = [
        'login' => $_GET['login'],
        'password' => $password_hash,
        'firstName' => $_GET['firstName'],
        'lastName' => $_GET['lastName'],
        'dateOfBirth' => $_GET['dateOfBirth']
    ];

    Core::getInstance()::$db->insert(tableName: $tableName, newRowArray: $data);
}