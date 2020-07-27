<?php

include './database.php';


//Trim white spaces
$email = trim($_POST['email']);

//Remove back slashes
$email = stripslashes($email);

//Remove special characters
$email = htmlspecialchars($email);

$result = mysqli_num_rows(mysqli_query($conn, "SELECT 1 FROM early_access WHERE email = '$email';"));


// Check if email is valid
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $signal = 'bad';
    $message = 'Please enter a valid email';
} elseif ($result > 0) // Check if email exists already
{
    $signal = 'bad';
    $message = 'Email already exists';
} else {
    $sql = "INSERT INTO `early_access` (`email`) VALUES ('$email')";

    if (mysqli_query($conn, $sql)) {
        $signal = 'ok';
        $message = 'Email registered successfully';
    } else {
        $signal = 'bad';
        $message = "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Close connection
mysqli_close($conn);

$data = array(
    'signal' => $signal,
    'msg' => $message
);

// Return data
echo json_encode($data);