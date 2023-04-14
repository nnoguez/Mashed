
<?php
include('db.php');



$text_input = $_POST['text_input']
$text_input = mysqli_real_escape_string($conn, $text_input);

$SQL = "SELECT * FROM ShoppingList WHERE Ingredient = '$text_input'";
$exeSQL = mysqli_query($conn, $SQL);

$InsertQuerry = "INSERT INTO ShoppingList (Ingredients) VALUES ('$text_input')";


if ($conn->query($InsertQuerry) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $InsertQuerry . "<br>" . $conn->error;
}

//$conn->close();

?>

