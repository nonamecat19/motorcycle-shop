<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') die;
include '../../../Core/Core.php';

use core\Core;

$data = [
    'login' => $_POST['login'],
    'password' => $_POST['password'],
    'firstName' => $_POST['firstName'],
    'lastName' => $_POST['lastName'],
    'role' => $_POST['role'],
    'dateOfBirth' => $_POST['dateOfBirth']
];

Core::getInstance()::$db->insert(tableName: 'users', newRowArray: $data);

echo json_encode($data, JSON_UNESCAPED_UNICODE);


