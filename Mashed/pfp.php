<?php
include('db.php');

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the uploaded file exists
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = './pfp/'; // specify the directory where you want to store the uploaded images
        $uploadFile = $uploadDir . basename($_FILES['image']['name']); // generate a unique filename for the uploaded image

        // Move the uploaded file to the specified directory
        if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadFile)) {
            // File upload successful, get the uploaded file URL
            $pfpUrl = 'https://students.gaim.ucf.edu/~na404266/dig4104c/mashed-server/pfp/' . basename($_FILES['image']['name']); // update the URL to include the correct file path

            // Store the image URL in your MySQL database
            // You can use the $pfpUrl variable to insert the image URL into your MySQL table
            $query = "INSERT INTO users (pfpUrl) VALUES ('$pfpUrl')";
            $result = mysqli_query($conn, $query); // replace with your actual database query

            if ($result) {
                $response = array('status' => 'success', 'message' => 'Image uploaded and stored successfully');
                echo json_encode($response);
            } else {
                $response = array('status' => 'error', 'message' => 'Failed to store image URL in database');
                echo json_encode($response);
            }
        } else {
            $response = array('status' => 'error', 'message' => 'Failed to upload image');
            echo json_encode($response);
        }
    } else {
        $response = array('status' => 'error', 'message' => 'No image file found in the request');
        echo json_encode($response);
    }
} else {
    $response = array('status' => 'error', 'message' => 'Invalid request');
    echo json_encode($response);
}
?>
