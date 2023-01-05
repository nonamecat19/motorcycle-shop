<?php
if ($_SERVER['REQUEST_METHOD'] != 'GET') die;
include '../../../Core/Core.php';

use core\Core;


$data = Core::getInstance()::$db->select(tableName: 'users');

echo json_encode($data, JSON_UNESCAPED_UNICODE);