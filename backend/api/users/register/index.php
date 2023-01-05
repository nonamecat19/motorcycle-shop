<?php
if ($_SERVER['REQUEST_METHOD'] != 'GET') die;
include '../../Core.php';
$conn = DbConnect::connect();
$login = $_GET['login'];
$first_name = $_GET['first_name'];
$second_name = $_GET['second_name'];
$password = $_GET['password'];

$sql = "SELECT * FROM users WHERE login = :login";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':login', $login);
$stmt->execute();
$users = $stmt->fetch(PDO::FETCH_ASSOC);

if ($users)
{
    echo 'false';
}
else{
    $sql2 = "
        INSERT INTO users(login, first_name, last_name, password, role)
        VALUE (:login, :first_name, :second_name, :password, 'user')
    ";
    $stmt2 = $conn->prepare($sql2);
    $stmt2->bindParam(':login', $login);
    $stmt2->bindParam(':first_name', $first_name);
    $stmt2->bindParam(':second_name', $second_name);
    $stmt2->bindParam(':password', $password);
    $stmt2->execute();
    $users2 = $stmt2->fetch(PDO::FETCH_ASSOC);
    echo 'true';
}
