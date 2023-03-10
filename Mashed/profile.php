
<?php
include('db.php');
session_start();

$UserID = $_COOKIE['UserID'];
$bio = $decodedData['bio'];

$SQL = "UPDATE users SET bio = '$bio' WHERE UserID ='$UserID'";
$exeSQL = mysqli_query($conn, $SQL);

if ($exeSQL) {
    $Message = "Your bio has been updated!";
} else {
    $Message = "Failed to update bio.";
}

$response[] = array("Message" => $Message);
echo json_encode($response);