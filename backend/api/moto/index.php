<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


$method = $_SERVER['REQUEST_METHOD'];

switch ($method){
    case 'POST':
        include 'post.php';
        break;

    case 'GET':
        include 'get.php';
        break;
}

