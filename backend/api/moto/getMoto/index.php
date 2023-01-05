<?php
if ($_SERVER['REQUEST_METHOD'] != 'GET') die;
header(header: "Access-Control-Allow-Origin: *");
header(header: "Access-Control-Allow-Headers: *");
header(header: "Access-Control-Allow-Credentials: true");
include '../../../Core/Core.php';
use core\Core;




$dataVariations = Core::getInstance()::$db->select(tableName: 'motorcycles INNER JOIN variation on motorcycles.id = variation.idMotorcycle');
$dataMoto = Core::getInstance()::$db->select(tableName: 'motorcycles');

foreach ($dataMoto as &$motorcycle) {
    $motoId = $motorcycle["id"];
    $motorcycle["variations"] = [];
    foreach ($dataVariations as $variation) {
        if ($motoId == $variation["idMotorcycle"]){
            $motorcycle["variations"][] = array(
                "id" => $variation["id"],
                "colorName" => $variation["colorName"],
                "colorHex" => $variation["colorHex"],
                "colorHex2" => $variation["colorHex2"],
                "available" => $variation["available"],
                "photo" => $variation["photo"]
            );
        }
    }
}
echo json_encode($dataMoto, JSON_UNESCAPED_UNICODE);






//
//
//if ($_SERVER['REQUEST_METHOD'] != 'GET') die;
//include '../../Core.php';
//
//$conn = DbConnect::connect();
//
//$sql = "SELECT * FROM motorcycles INNER JOIN variation on motorcycles.id = motorcycles.idMotorcycle";
//$stmt = $conn->prepare($sql);
//$stmt->execute();
//$dataVariations = $stmt->fetchAll(PDO::FETCH_ASSOC);
//
//$sql2 = "SELECT * FROM motorcycles";
//$stmt2 = $conn->prepare($sql2);
//$stmt2->execute();
//$dataMoto = $stmt2->fetchAll(PDO::FETCH_ASSOC);
//
//foreach ($dataMoto as &$motorcycle) {
//    $motoId = $motorcycle["id"];
//    $motorcycle["variations"] = [];
//    foreach ($dataVariations as $variation) {
//        if ($motoId == $variation["idMotorcycle"]){
//            $motorcycle["variations"][] = array(
//                "id" => $variation["id"],
//                "colorName" => $variation["colorName"],
//                "colorHex" => $variation["colorHex"],
//                "colorHex2" => $variation["colorHex2"],
//                "available" => $variation["available"],
//                "photo" => $variation["photo"]
//            );
//        }
//    }
//}
//echo json_encode($dataMoto, JSON_UNESCAPED_UNICODE);
