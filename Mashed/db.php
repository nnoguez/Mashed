<?php

$serverName = "localhost";
$userName= "root";
$password = "root";
$dbName = "mashed";

$conn = mysqli_connect($serverName, $userName, $password, $dbName);


$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);