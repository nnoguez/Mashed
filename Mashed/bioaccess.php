<?php
include('db.php');
session_start();

$UserID = $_COOKIE['UserID'];

$SQL = "SELECT bio FROM users WHERE UserID ='$UserID'";
$exeSQL = mysqli_query($conn, $SQL);

if ($exeSQL) {
    $row = mysqli_fetch_assoc($exeSQL);
    $bio = $row['bio'];
    $response[] = array("bio" => $bio);
} else {
    $response[] = array("Message" => "Failed to retrieve bio.");
}

echo json_encode($response);
?>
