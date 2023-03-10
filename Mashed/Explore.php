<?php
   include('db.php');
    // Retrieve recipe data from the database
    $sql = "SELECT RecipeName, ImageURL FROM recipe";
    $result = mysqli_query($conn, $sql);

    // Convert the result set into an array of recipe objects
    $recipes = array();
    if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
    $recipe = array(
        'id' => count($recipes) + 1,
        'name' => $row['RecipeName'],
    );
    array_push($recipes, $recipe);
    }
    }

    // Close the database connection
    mysqli_close($conn);

    // Output the recipe data as JSON
    echo json_encode($recipes);
?>