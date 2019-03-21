<?php
include'includes/conn.php';
$name=$_GET['name'];
$password=MD5($_GET['password']);
$q="SELECT * FROM tb_member WHERE name='$name'AND password='$password'AND active=1";
$r=mysqli_query($dbc,$q);
$num= mysqli_num_rows($r);
if($num==1){
    echo "1";
}
else{
    echo "0";
}

