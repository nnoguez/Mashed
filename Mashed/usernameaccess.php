<?php
include('db.php');
session_start();

$UserID = $_COOKIE['UserID'];

$SQL = "SELECT Username FROM users WHERE UserID ='$UserID'";
$exeSQL = mysqli_query($conn, $SQL);

if ($exeSQL) {
    $row = mysqli_fetch_assoc($exeSQL);
    $Username = $row['Username'];
    $response[] = array("Username" => $Username);
} else {
    $response[] = array("Message" => "Failed to retrieve Username.");
}

echo json_encode($response);
?>
