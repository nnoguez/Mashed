
<?php
include('dbrecipe.php');

$UserEmail = $decodedData['Email'];
$Username = $decodedData['Username'];
$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM users WHERE UserEmail = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = "Already registered";
} else {

    $InsertQuerry = "INSERT INTO users(UserEmail, Username, UserPW) VALUES('$UserEmail', '$Username', '$UserPW')";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Welcome to Mashed!";
    } else {
        $Message = "We couldn't complete your request";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);
