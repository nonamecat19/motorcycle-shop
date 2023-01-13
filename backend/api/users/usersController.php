<?php

use core\Core;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
$tableName = 'users';
error_reporting(E_ALL);
ini_set("display_errors", 1);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $fields = ['id', 'login', 'firstName', 'lastName', 'role', 'dateOfBirth'];
        $data = Core::getInstance()::$db->select(tableName: $tableName, fieldsList: $fields);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        break;

    case 'POST':
        $data = [
            'login' => $_GET['login'],
            'password' => md5($_GET['password']),
            'firstName' => $_GET['firstName'],
            'lastName' => $_GET['lastName'],
            'role' => $_GET['role'],
            'dateOfBirth' => $_GET['dateOfBirth']
        ];

        Core::getInstance()::$db->insert(tableName: $tableName, newRowArray: $data);
        break;

    case 'DELETE':
        $data = ['id' => $_GET['id']];
        Core::getInstance()::$db->delete(tableName: $tableName, conditionArray: $data);
        break;

    case 'PUT':
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
        break;
}