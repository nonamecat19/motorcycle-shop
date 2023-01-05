<?php
if ($_SERVER['REQUEST_METHOD'] != 'GET') die;
include '../../Core.php';

$login = $_GET['login'];
$password = $_GET['password'];
$conn = DbConnect::connect();
$sql = "SELECT id, firstName, lastName, role
        FROM users
        WHERE login = :login AND password = :password";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':login', $login);
$stmt->bindParam(':password', $password);
$stmt->execute();
$users = $stmt->fetch(PDO::FETCH_ASSOC);
echo json_encode($users, JSON_UNESCAPED_UNICODE);
