<?php
namespace core;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
require 'Core/Core.php';
class RoutesController
{
    public static function execute(): void
    {

        $route = explode(separator: '/', string: $_SERVER['REQUEST_URI']);
        array_shift($route);
        $category = $route[0];
        $categoryClean = explode('?', $category)[0];
        $method = $_SERVER['REQUEST_METHOD'];
        require "api/${categoryClean}/${categoryClean}Controller.php";
    }
}


