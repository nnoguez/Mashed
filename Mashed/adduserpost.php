<?php

include('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
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

    // Prepare response as JSON
    $response = array("Message" => $Message);
    echo json_encode($response);
} else {
    // Handle invalid request
    $response = array("Message" => "Invalid request method");
    echo json_encode($response);
}

?>
