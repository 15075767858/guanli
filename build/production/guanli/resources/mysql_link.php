<?php
header("Content-type: text/html;charset=utf-8");
$mysql = mysqli_connect("bdm246823269.my3w.com", "bdm246823269", "abcd123456", "bdm246823269_db");
//mysqli_query($mysql,"alter database name character set utf8;");
mysqli_query($mysql, "set names utf8");


