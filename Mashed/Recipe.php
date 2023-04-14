<?php
include('db.php');

// Get the recipe ID from the URL parameter
$recipe_id = $_GET['recipe_id'];

$sql = "SELECT RecipeName, description, prep_time, cook_time, difficulty, serving_size FROM recipes WHERE RecipeId = $recipe_id";
$result = mysqli_query($conn, $sql);

// Check for errors
if (!$result) {
    die("Error: " . $sql . "<br>" . mysqli_error($conn));
}

// Build an array of the recipe data
$recipe = array();
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $recipe["RecipeName"] = $row["RecipeName"];
        $recipe["description"] = $row["description"];
        $recipe["prep_time"] = $row["prep_time"];
        $recipe["cook_time"] = $row["cook_time"];
        $recipe["difficulty"] = $row["difficulty"];
        $recipe["serving_size"] = $row["serving_size"];
    }
}

// Return the recipe data as JSON
header('Content-Type: application/json');
echo json_encode($recipe);

// Close the database connection
mysqli_close($conn);
?>