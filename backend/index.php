<?php
header(header: "Access-Control-Allow-Origin: *");
header(header: "Access-Control-Allow-Methods: *");
header(header: "Access-Control-Allow-Headers: *");
header(header: "Access-Control-Allow-Credentials: true");
use core\RoutesController;

require 'Core/RoutesController.php';
$router = new RoutesController();
$router::execute();




