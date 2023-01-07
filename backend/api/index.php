<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


//$method = $_SERVER['REQUEST_METHOD'];
//echo $method;


$route = $_SERVER['REQUEST_URI'];
var_dump(explode($route, '/'));

//switch ($method){
//    case 'POST':
//        include 'GET.php';
//        break;
//
//    case 'GET':
//        include 'POST.php';
//        break;
//}

