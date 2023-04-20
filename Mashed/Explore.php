<?php
   include('db.php');
    // Query to select recipe names and ids from the database
    $sql = "SELECT RecipeName, RecipeId FROM Recipes";
    $result = $conn->query($sql);

    // Array to store recipe names and ids
    $recipes = array();

    if ($result->num_rows > 0) {
    // Fetch recipe names and ids from each row
    while($row = $result->fetch_assoc()) {
        $recipes[] = $row;
    }
    } else {
    echo "0 results";
    }

    // Encode recipe names and ids as JSON and send to client
    echo json_encode($recipes);
?>