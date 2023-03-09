<?php

$serverName = "localhost";
$userName= "na404266";
$password = "LeticiaPerk77!";
$dbName = "na404266";

$conn = mysqli_connect($serverName, $userName, $password, $dbName, $RecipeName, $RecipeStep, $RecipeIngredients);


$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);