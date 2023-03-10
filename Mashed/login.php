
<?php
include('db.php');

$Username = $decodedData['Username'];
$UserPW = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM users WHERE Username = '$Username'";
$exeSQL = mysqli_query($conn, $SQL);
$checkUser =  mysqli_num_rows($exeSQL);

if ($checkUser != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['UserPw'] != $UserPW) {
        $Message = "Incorrect Password";
    } else {
        $Message = "Successfully Logged In!";
        setcookie("loginStatus", "loggedIn", 0, "/");
        setcookie("UserID", $arrayu['UserID'], 0, "/");
    }
} else {
    $Message = "Account not found";
}

$response[] = array("Message" => $Message);
echo json_encode($response);