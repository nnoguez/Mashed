<?php
include('db.php');

if (isset($_GET['RecipeId'])) {
    $recipeId = $_GET['RecipeId'];
    $sql = "SELECT * FROM Recipes WHERE RecipeId = $recipeId";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // Store the result in an associative array
        $recipes = mysqli_fetch_all($result, MYSQLI_ASSOC);
        // Return the array as a JSON response
        echo json_encode($recipes);
    } else {
        echo "No posts yet";
    }
} else {
    echo "Recipe ID not specified";
}
?>
