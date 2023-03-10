<?php
include('db.php');
// SQL query to retrieve posts data
$sql = "SELECT * FROM Posts";

// Execute the query and store the result
$result = mysqli_query($conn, $sql);

// Check if there are any rows returned
if (mysqli_num_rows($result) > 0) {
    // Store the result in an associative array
    $posts = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // Return the array as a JSON response
    echo json_encode($posts);
} else {
    echo "No posts yet";
}