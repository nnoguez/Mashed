<?php
   include('db.php');
    // Query to select recipe names from the database
    $sql = "SELECT RecipeName FROM Recipes";
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
?>