<?php
include('db.php');

$RecipeName = $decodedData['RecipeName'];
$RecipeStep = $decodedData['RecipeStep'];
$RecipeIngredients = $decodedData['RecipeIngredients'];
$PrepTime = $decodedData['PrepTime'];
$CookTime = $decodedData['CookTime'];
$Difficulty = $decodedData['Difficulty'];
$ServingSize = $decodedData['ServingSize'];
$RecipeDescription = $decodedData['RecipeDescription'];

$InsertQuery = "INSERT INTO Recipes (RecipeName, RecipeStep, RecipeIngredients, PrepTime, CookTime, Difficulty, ServingSize, RecipeDescription) 
                VALUES ('$RecipeName', '$RecipeStep', '$RecipeIngredients', '$PrepTime', '$CookTime', '$Difficulty', '$ServingSize', '$RecipeDescription')";

$result = mysqli_query($conn, $InsertQuery);

if ($result) {
    $Message = "Recipe Successfully Added!";
} else {
    $Message = "We couldn't complete your request. Error: " . mysqli_error($conn);
}

$response[] = array("Message" => $Message);
echo json_encode($response);
?>
