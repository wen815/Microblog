<?php
require 'includes/conn.php';
$name=$_GET['name'];
$q="select * from tb_member where name='$name'";
$r= mysqli_query($dbc,$q);
echo mysqli_num_rows($r);

