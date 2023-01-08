<?php

use core\Core;

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $fields = ['id', 'login', 'firstName', 'lastName', 'role', 'dateOfBirth'];
        $data = Core::getInstance()::$db->select(tableName: 'users', fieldsList: $fields);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        break;

    case 'POST':
        $data = [
            'login' => $_GET['login'],
            'password' => $_GET['password'],
            'firstName' => $_GET['firstName'],
            'lastName' => $_GET['lastName'],
            'role' => $_GET['role'],
            'dateOfBirth' => $_GET['dateOfBirth']
        ];

        Core::getInstance()::$db->insert(tableName: 'users', newRowArray: $data);
        break;

    case 'DELETE':
        $data = ['id' => $_GET['id']];
        Core::getInstance()::$db->delete(tableName: 'users', conditionArray: $data);
        break;

}