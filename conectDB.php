<?php
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$gender = $_POST['gender'];
//require 

if (!empty($username) || !empty($password) || !empty($gender) || !empty($email) ) {
<<<<<<< HEAD
 $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "logincce";
=======
 $host = "remotemysql.com";
    $dbUsername = "DOYn2nt6oc";
    $dbPassword = "7ad5NZgfHB";
    $dbname = "DOYn2nt6oc";
>>>>>>> 6ccbc2c1eea52694f29dc4c619c7ce61b996979b
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    //check connection sh3'ala wala la2
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
             //select lel table X , select coloumn Email mn table register 
             //select title from book where *condition*

     $SELECT = "SELECT email From register Where email = ? Limit 1";
     $INSERT = "INSERT Into register (username, password,  email,gender) values(?, ?, ?, ?)";
     //Prepare statement
     /// 3 = fe JS '5'==5 , integer we string fa bnst3ml 3 ===
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssss", $username, $password, $email,$gender);
      $stmt->execute();
      echo "New record inserted sucessfully";
     } else {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>