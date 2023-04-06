
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





// TROUBLESHOOTING UPDATE DOESNT WORK IN THIS VERSION// ATTEMPTING TO GET VALUES USERNAME AND BIO TO APPEAR ON PROFILE.JS
// PROMPT NOTES THAT VALUES ARE BEING SELECTED BUT THERE IS NO OUTPUT ON SCREEN

// <?php
// include('db.php');
// session_start();

// $username = $_SESSION['username'];
// var_dump($_SESSION['username']);


// $UserID = $_COOKIE['UserID'];

// // Select username and bio from the 'users' table
// $SQL = "SELECT * FROM users WHERE Username ='$username'";
// $exeSQL = mysqli_query($conn, $SQL);

// if ($exeSQL) {
//     if (mysqli_num_rows($exeSQL) > 0) {
//         $row = mysqli_fetch_assoc($exeSQL);
//         $username = $row['username'];
//         $bio = $row['bio'];
//         $Message = "User data retrieved successfully.";
//     } else {
//         $Message = "User data not found.";
//     }
// } else {
//     $Message = "Failed to select user data.";
// }

// // Update the bio for the selected user
// $bio = mysqli_real_escape_string($conn, $_POST['bio']);
// $SQL = "UPDATE users SET bio = '$bio' WHERE UserID ='$UserID'";
// $exeSQL = mysqli_query($conn, $SQL);

// if ($exeSQL) {
//     $Message = "Your bio has been updated!";
// } else {
//     $Message = "Failed to update bio.";
// }

// // Return the response as JSON
// $response[] = array("Message" => $Message, "Username" => $username, "Bio" => $bio);
// echo json_encode($response);

