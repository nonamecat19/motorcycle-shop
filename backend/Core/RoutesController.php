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


//        $params = [
//            'model' => $_POST['model'],
//            'brand' => $_POST['brand'],
//            'price' => $_POST['price'],
//            'engineCapacity' => $_POST['engineCapacity'],
//            'enginePower' => $_POST['enginePower'],
//            'fuelConsumption' => $_POST['fuelConsumption'],
//            'fuelCapacity' => $_POST['fuelCapacity'],
//            'gears' => $_POST['gears'],
//            'mass' => $_POST['mass'],
//        ];
//
//        Core::getInstance()::$db->insert(tableName: 'motorcycles', newRowArray: $params);






    }
}


