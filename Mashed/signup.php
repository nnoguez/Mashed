
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
// sending info to users table
    $InsertQuerry = "INSERT INTO users(UserEmail, Username, UserPW) VALUES('$UserEmail', '$Username', '$UserPW')";

    $R = mysqli_query($conn, $InsertQuerry);

    // onPress user enters into Mashed
    if ($R) {
        $Message = "Welcome to Mashed!";
        setcookie("loginStatus", "loggedIn", 0, "/");
        setcookie("UserID", $arrayu['UserID'], 0, "/");
    } else {
        $Message = "We couldn't complete your request";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);
