<?php


use core\Core;

//error_reporting(E_ALL);
//ini_set("display_errors", 1);

function toStatData(array $data): array
{
    $result = [];
    foreach ($data as $type) {
        $currentType = [];
        foreach ($type as $key => $value) {
            $currentType[] = [
                'id' => $key,
                'value' => $value
            ];
        }
        $result[] = $currentType;
    }
    return $result;
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $resultMoto = Core::getInstance()::$db->select(
        tableName: 'motorcycles',
        fieldsList: ['brand', 'price']
    );

    $resultUsers = Core::getInstance()::$db->select(
        tableName: 'users',
        fieldsList: ['role']
    );

    $resultVariations = Core::getInstance()::$db->select(
        tableName: 'variation',
        fieldsList: ['available']
    );

    $brandNum = [];

    for ($i = 0; $i < count($resultMoto); $i++) {
        try {
            $brandNum[$resultMoto[$i]['brand']]++;
        }catch (Exception $e) {
            $brandNum[$resultMoto[$i]['brand']] = 0;
        }

    }

    $priceMoto = [
        '0-100тис' => 0,
        '100тис-500тис' => 0,
        '500тис+' => 0
    ];
    for ($i = 0; $i < count($resultMoto); $i++) {
        if ($resultMoto[$i]['price'] < 100_000) {
            $priceMoto['0-100тис']++;
        } elseif ($resultMoto[$i]['price'] < 500_000) {
            $priceMoto['100тис-500тис']++;
        } else {
            $priceMoto['500тис+']++;
        }
    }

    $rolesUsers = [
        'Користувач' => 0,
        'Адміністратор' => 0,
        'Модератор' => 0,
    ];

    for ($i = 0; $i < count($resultUsers); $i++) {
        if ($resultUsers[$i]['role'] == 'user') {
            $rolesUsers['Користувач']++;
        } elseif ($resultUsers[$i]['role'] == 'admin') {
            $rolesUsers['Адміністратор']++;
        } else {
            $rolesUsers['Модератор']++;
        }
    }

    $numAvailable = [
        'Немає на складі' => 0,
        '1-10' => 0,
        '11+' => 0,
    ];

    for ($i = 0; $i < count($resultVariations); $i++) {
        if ($resultVariations[$i]['available'] == 0) {
            $numAvailable['Немає на складі']++;
        } elseif ($resultVariations[$i]['available'] < 11) {
            $numAvailable['1-10']++;
        } else {
            $numAvailable['11+']++;
        }
    }

    echo json_encode(toStatData([$brandNum, $priceMoto, $rolesUsers, $numAvailable]));
//    echo json_encode([$brandNum, $priceMoto, $rolesUsers, $numAvailable]);
}