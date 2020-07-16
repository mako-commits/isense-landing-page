<?php

$servername = "85.10.205.173:3306";
$username = "pythagoras";
$password = "pythagoras1505";

// Connect to database
$conn = mysqli_connect($servername, $username, $password, 'pythagoras_db');

//Check connection
if (!$conn) {
    $data = array(
        'signal' => 'bad',
        'msg' => "Connection failed:" . mysqli_connect_error()
    );

    die(json_encode($data));
}