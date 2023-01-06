<?php
if ($_SERVER['REQUEST_METHOD'] != 'GET') die;
include '../../../Core/Core.php';

use core\Core;

$fields = ['id', 'login', 'firstName', 'lastName', 'role', 'dateOfBirth'];
$data = Core::getInstance()::$db->select(tableName: 'users', fieldsList: $fields);

echo json_encode($data, JSON_UNESCAPED_UNICODE);
