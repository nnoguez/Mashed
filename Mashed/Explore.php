<?php
   include('db.php');
    // Query to select recipe names from the database
    $sql = "SELECT RecipeName, RecipeId FROM Recipes";
    $result = $conn->query($sql);

    // Array to store recipe names
    $recipes = array();

    if ($result->num_rows > 0) {
    // Fetch recipe names from each row
    while($row = $result->fetch_assoc()) {
        $recipes[] = $row["RecipeName"];
    }
    } else {
    echo "0 results";
    }

    // Encode recipe names as JSON and send to client
    echo json_encode($recipes);

?>