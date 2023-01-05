<?php
if ($_SERVER['REQUEST_METHOD'] != 'GET') die;
header(header: "Access-Control-Allow-Origin: *");
header(header: "Access-Control-Allow-Headers: *");
header(header: "Access-Control-Allow-Credentials: true");
include '../../../Core/Core.php';

use core\Core;


$data = Core::getInstance()::$db->select(tableName: 'motorcycles');

echo json_encode($data, JSON_UNESCAPED_UNICODE);