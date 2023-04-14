<?php
// include('db.php');

// $sql = "INSERT INTO recipes (recipe_name) VALUES ('$recipe_name');"
// $sql. = "INSERT INTO ingredients (ingredient_name) VALUES ('$ingredient_name')";
// $sql. = "INSERT INTO ingredients (recipe_steps) VALUES ('$recipe_steps')";
// if ($link->multi_query($sql) === TRUE) {
//     $recipeId = $link->insert_id;
//     $link->next_result();
//     $ingredientId = $link->insert_id;
//     $stepId = $link-> insert_id;
//     $link->next_result();
//     $sql2 = "INSERT INTO recipe_ingredients(recipe_id,ingredient_id,amount,step_id) VALUES ($recipeId,$ingredientId,$amount,$stepId);"
//     if ($link->query($sql2) == TRUE){
//         echo "New recipe created successfully";} 
//     }
//     else {
//        echo "Error: " . $sql2 . "<br>" . $link->error;
//     }
// }
// else {
//    echo "Error: " . $sql . "<br>" . $link->error;
// }

// $response[] = array("Message" => $Message);
// echo json_encode($response);
include('db.php');

$RecipeName = $decodedData['RecipeName'];
$RecipeStep = $decodedData['RecipeStep'];
$RecipeIngredients = $decodedData['RecipeIngredients'];
$PrepTime = $decodedData['PrepTime'];
$CookTime = $decodedData['CookTime'];
$Difficulty = $decodedData['Difficulty'];
$ServingSize = $decodedData['ServingSize'];
$RecipeDescription = $decodedData['RecipeDescription'];

$SQL = "SELECT * FROM Recipes WHERE RecipeName = '$RecipeName'";
$exeSQL = mysqli_query($conn, $SQL);

$InsertQuerry = "INSERT INTO Recipes(RecipeName, RecipeStep, RecipeIngredients, PrepTime, CookTime, Difficulty, ServingSize, RecipeDescription) 
                VALUES('$RecipeName', '$RecipeStep', '$RecipeIngredients', '$PrepTime', '$CookTime', '$Difficulty', '$ServingSize', '$RecipeDescription')";

$R = mysqli_query($conn, $InsertQuerry);

if ($R) {
    $Message = "Recipe Successfully Posted!";
} else {
    $Message = "We couldn't complete your request";
}

$response[] = array("Message" => $Message);
echo json_encode($response);