<?php

include('db.php');

// Get data from request
$PostName = $_POST['PostName'];
$PostBio = $_POST['PostBio'];

// Insert data into the database
$sql = "INSERT INTO Post (PostName, PostBio) VALUES 
    (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $PostName, $PostBio);
$R = $stmt->execute();
$stmt->close();

if ($R) {
    $Message = "Recipe Successfully Posted!";
} else {
    $Message = "We couldn't complete your request";
}

// Prepare response as JSON
$response = array("Message" => $Message);
echo json_encode($response);
