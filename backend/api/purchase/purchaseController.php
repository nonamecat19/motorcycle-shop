<?php

use core\Core;

$tableName = 'variation';

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        break;

    case 'POST':
        $data = $_GET['data'];
        $json = json_decode($data, true);

        for ($i = 0; $i < count($json); $i++) {
            $myData = $json[$i];
            $select = Core::getInstance()::$db->select(tableName: $tableName, fieldsList: 'available', conditionArray: ['id' => $myData[1]]);
            $select = intval($select[0]['available']) - $myData[2];
            Core::getInstance()::$db->update(tableName: $tableName, newValuesArray: ['available' => $select], conditionArray: ['id' => $myData[1]]);
        }

        break;
}