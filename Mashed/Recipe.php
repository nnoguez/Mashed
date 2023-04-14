<?php
include('db.php');

// Get the recipe ID from the URL parameter
// $recipe_id = $_GET['recipe_id'];

$sql = "SELECT * FROM Recipes WHERE RecipeId = 1";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // Store the result in an associative array
    $recipes = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // Return the array as a JSON response
    echo json_encode($recipes);
} else {
    echo "No posts yet";
}
?>
