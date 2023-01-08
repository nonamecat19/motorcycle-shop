<?php

use core\Core;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
error_reporting(E_ALL);
ini_set("display_errors", 1);

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $dataVariations = Core::getInstance()::$db->select(tableName: 'motorcycles INNER JOIN variation on motorcycles.id = variation.idMotorcycle');
        $dataMoto = Core::getInstance()::$db->select(tableName: 'motorcycles');

        foreach ($dataMoto as &$motorcycle) {
            $motoId = $motorcycle["id"];
            $motorcycle["variation"] = [];
            foreach ($dataVariations as $variation) {
                if ($motoId != $variation["idMotorcycle"])
                    continue;

                $motorcycle["variation"][] = array(
                    "id" => $variation["id"],
                    "colorName" => $variation["colorName"],
                    "colorHex" => $variation["colorHex"],
                    "colorHex2" => $variation["colorHex2"],
                    "available" => $variation["available"],
                    "photo" => $variation["photo"]
                );
            }
        }
        echo json_encode($dataMoto, JSON_UNESCAPED_UNICODE);
        break;

    case 'POST':
        $params = [
            'model' => $_GET['model'],
            'brand' => $_GET['brand'],
            'price' => $_GET['price'],
            'engineCapacity' => $_GET['engineCapacity'],
            'enginePower' => $_GET['enginePower'],
            'fuelConsumption' => $_GET['fuelConsumption'],
            'fuelCapacity' => $_GET['fuelCapacity'],
            'gears' => $_GET['gears'],
            'mass' => $_GET['mass'],
        ];

        Core::getInstance()::$db->insert(tableName: 'motorcycles', newRowArray: $params);
        break;

    case 'DELETE':
        $data = ['id' => $_GET['id']];
        Core::getInstance()::$db->delete(tableName: 'motorcycles', conditionArray: $data);
        break;
}