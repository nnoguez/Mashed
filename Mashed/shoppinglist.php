<? include('recipe.php');
   include('db.php');

//how to connect and make sure it is one the users ingredient account

$Ingredient = $decodeData['Ingredient'];

$SQL = "SELECT * FROM Recipe WHERE Ingredients = '$Igredient'";
$exeSQL = mysqli_query($conn, $SQL);
$DisplayIng =  mysqli_num_rows($exeSQL);

//how to take ingredient data and add it into seperate 

if ($Username == $Username) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['UserPw'] != $UserPW) {
        $Message = "Incorrect Password";
    } else {
        $Message = "Successfully Logged In!";
    }
} else {
    $Message = "Account not found";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
