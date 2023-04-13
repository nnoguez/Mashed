<?php

include('db.php');

// ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get data from request
    $PostName = isset($_POST['PostName']) ? $_POST['PostName'] : '';
    $PostBio = isset($_POST['PostBio']) ? $_POST['PostBio'] : '';

    // Insert data into the database
    $sql = "INSERT INTO Posts (PostName, PostBio) VALUES 
        ('$PostName', '$PostBio')";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        $Message = "Post Successfully Added!";
    } else {
        $Message = "We couldn't complete your request";
    }

    $response[] = array("Message" => $Message);
    echo json_encode($response);
?>


