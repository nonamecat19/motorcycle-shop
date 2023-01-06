<?php
include '../../Core/Core.php';
use core\Core;

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