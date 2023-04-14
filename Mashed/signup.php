<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$Username = $decodedData['Username'];
$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM users WHERE UserEmail = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = "You are already registered, so we went ahead and logged you in. Welcome back to Mashed!";
} else {
    // sending info to users table with specific values
    $InsertQuerry = "INSERT INTO users(UserEmail, Username, UserPW, bio, pfpUrl) VALUES('$UserEmail', '$Username', '$UserPW', '', '')";

    $R = mysqli_query($conn, $InsertQuerry);

    // Check if the query was successful
    if ($R) {
        $Message = "Welcome to Mashed! Please go ahead and login with your credentials.";
        setcookie("loginStatus", "loggedIn", 0, "/");
        setcookie("UserID", $arrayu['UserID'], 0, "/");
    } else {
        $Message = "We couldn't complete your request: " . mysqli_error($conn);
    }
}

$response[] = array("Message" => $Message);
echo json_encode($response);
