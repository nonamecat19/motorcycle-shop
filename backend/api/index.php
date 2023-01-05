<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

//include 'DbConnect.php';

//$onjDb = new DbConnect;
//$conn = $onjDb->connect();
//
//
////Create JWT authorization for php
////
//// Path: index.php
//// Compare this snippet from moto\get-motorcycles\index.php:
// if ($_SERVER['REQUEST_METHOD'] != 'GET') die;
// include '../../Core.php';
//
// $param = $_GET['id'];
// $conn = DbConnect::connect();
// $sql = "SELECT * FROM motorcycles";
// if(isset($param) && is_numeric($param)) {
//     $sql .= " WHERE id = :id";
//     $stmt = $conn->prepare($sql);
//     $stmt->bindParam(':id', $param);
//     $stmt->execute();
//     $users = $stmt->fetch(PDO::FETCH_ASSOC);
// } else {
//     $stmt = $conn->prepare($sql);
//     $stmt->execute();
//     $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
// }
//
// echo json_encode($users, JSON_UNESCAPED_UNICODE);
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: *");


echo 'asdfasdfasdf';

