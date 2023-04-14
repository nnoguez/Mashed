<?php
include('db.php');

// Get the recipe ID from the URL parameter
// $recipe_id = $_GET['recipe_id'];

$sql = "SELECT RecipeName, RecipeStep, RecipeIngredients, PrepTime, CookTime, Difficulty, ServingSize, RecipeDescription FROM Recipes WHERE RecipeId = 1";
$result = mysqli_query($conn, $sql);

// // Check for errors
// if (!$result) {
//     die("Error: " . $sql . "<br>" . mysqli_error($conn));
// }

// Build an array of the recipe data
$recipes = array();
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $recipes["RecipeName"] = $row["RecipeName"];
        $recipes["RecipeStep"] = $row["RecipeStep"];
        $recipes["RecipeIngredients"] = $row["RecipeIngredients"];
        $recipes["description"] = $row["description"];
        $recipes["prep_time"] = $row["prep_time"];
        $recipes["cook_time"] = $row["cook_time"];
        $recipes["difficulty"] = $row["difficulty"];
        $recipes["serving_size"] = $row["serving_size"];
    }
}

// Return the recipe data as JSON
header('Content-Type: application/json');
echo json_encode($recipes);

// Close the database connection
mysqli_close($conn);
?>