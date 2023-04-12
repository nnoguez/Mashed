<?php

include('db.php');

$PostName = $_POST['PostName'];
$PostBio = $_POST['PostBio'];
$UserId = $_POST['UserId'];
$postTime = date('Y-m-d H:i:s');

// Insert data into the database
$sql = "INSERT INTO UserPost (PostName, PostBio, Poster, Likes, Shares, Comments, Bookmarks) VALUES 
    ('$postName', '$postBio','$UserId', '$postTime', 0, 0, 0, 0)";

if (mysqli_query($conn, $sql)) {
    $response_array['status'] = 'success';
    $response_array['Message'] = 'Post added successfully!';
} else {
    $response_array['status'] = 'error';
    $response_array['Message'] = 'Error adding post: ' . mysqli_error($conn);
}

echo json_encode(array($response_array));
$response[] = array("Message" => $Message);
echo json_encode($response);