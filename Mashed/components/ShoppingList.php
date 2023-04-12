
<?php
include('db.php');
session_start();

$UserID = $_COOKIE['UserID'];
$List = $decodedData['List'];

$SQL = "UPDATE users SET List = '$List' WHERE UserID ='$UserID'";
$exeSQL = mysqli_query($conn, $SQL);

if ($exeSQL) {
    $Message = "Your bio has been updated!";
} else {
    $Message = "Failed to update bio.";
}



$response[] = array("Message" => $Message);
echo json_encode($response);
