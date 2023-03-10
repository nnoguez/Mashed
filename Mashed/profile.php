<?php

include('db.php');

$UserID = $decodedData['UserID'];
$bio = $decodedData['bio'];

$SQL = "SELECT * FROM profile WHERE UserID = '$UserID'";
$exeSQL = mysqli_query($conn, $SQL);


    $InsertQuerry = "INSERT INTO profile(UserID, bio) VALUES('$UserID', '$bio')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Bio Successfully Posted!";
    } else {
        $Message = "We couldn't complete your request";
    }

$response[] = array("Message" => $Message);
echo json_encode($response);


// function security_loggedIn() {
//     // Does a cookie exist?
//     return isset($_COOKIE["login"]);
// }

// function security_logout() {
//     // Set a cookie to the past
//     setcookie("login", "yes", time() - 10);
// }