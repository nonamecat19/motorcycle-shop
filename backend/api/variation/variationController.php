<?php

use core\Core;
error_reporting(E_ALL);
ini_set("display_errors", 1);

$tableName = 'variation';

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $tmpName = $_FILES['file']['tmp_name'];
        do{
            $name = uniqid().'.png';
            $path = 'data/'.$name;
        }while(file_exists($path));
        move_uploaded_file($tmpName, $path);
        $data = [
            'idMotorcycle' => $_GET['idMotorcycle'],
            'colorName' => $_GET['colorName'],
            'colorHex' => $_GET['colorHex'],
            'colorHex2' => $_GET['colorHex2'],
            'available' => $_GET['available'],
            'photo' => $name
        ];
        Core::getInstance()::$db->insert(tableName: $tableName, newRowArray: $data);
        break;

    case 'PUT':
        $photo = null;
        if ($_FILES['file']){
            do{
                $name = uniqid().'.png';
                $path = 'data/'.$name;
            }while(file_exists($path));
            move_uploaded_file($_FILES['file']['tmp_name'], $path);
            unlink('data/'.$_GET['photo']);
            $photo = $name;
        }else{
            $photo = $_GET['photo'];
        }
        $id = [
            'id' => $_GET['id']
        ];
        $data = [
            'idMotorcycle' => $_GET['idMotorcycle'],
            'colorName' => $_GET['colorName'],
            'colorHex' => $_GET['colorHex'],
            'colorHex2' => $_GET['colorHex2'],
            'available' => $_GET['available'],
            'photo' => $photo
        ];
        Core::getInstance()::$db->update(tableName: $tableName, newValuesArray: $data, conditionArray: $id);
        break;

    case 'DELETE':
        $data = ['id' => $_GET['id']];
        Core::getInstance()::$db->delete(tableName: $tableName, conditionArray: $data);
        break;
}