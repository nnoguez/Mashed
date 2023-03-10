
<?php
include('db.php');


// Retrieve user info from database
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $userID = $_GET['userID']; // User ID from request parameter
    $username = $_GET['username']; // Username from request parameter
    
    if ($userID != null) {
        $sql = "SELECT * FROM users WHERE id = $userID";
    } else if ($username != null) {
        $sql = "SELECT * FROM users WHERE username = '$username'";
    } else {
        echo "Invalid request";
        exit();
    }

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $userInfo = array(
            'userID' => $row['id'],
            'username' => $row['username'],
            'bio' => $row['bio']
        );
        echo json_encode($userInfo);
    } else {
        echo "User not found";
    }
}

$conn->close();
?>