<?php

include('db.php');

// Get data from request
$PostName = $decodedData['PostName'];
$PostBio = $decodedData['PostBio'];
$UserId = $_COOKIE['UserID'];
$PostTime = date('Y-m-d H:i:s');

// Select the username from the users table
$sql = "SELECT Username FROM users WHERE UserID = '$UserId'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$Username = $row['Username'];

// Insert data into the database
$sql = "INSERT INTO Posts (PostName, PostBio, Poster, PostTime, PostImage, Likes, Comments, Shares, Bookmarks) 
    VALUES ('$PostName', '$PostBio', '$Username', '$PostTime', 0, 0, 0, 0, 0)";
$result = mysqli_query($conn, $sql);

if ($result) {
    $Message = "Post Successfully Added!";
} else {
    $Message = "We couldn't complete your request";
}

$response[] = array("Message" => $Message);
echo json_encode($response);
?>


