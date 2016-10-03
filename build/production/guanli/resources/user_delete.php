<?php

/*require_once('mysql_link.php');
mysqli_query($mysql, "set names utf8");

$par = $_REQUEST['par'];
if ($par) {

    $vipId = call_user_func($par, $mysql, $_REQUEST);

}
mysqli_close($mysql);*/


function deleteUser($mysql, $arr)
{
    $id = $arr['id'];
    mysqli_query($mysql, "DELETE FROM `huibang_user` WHERE `id` ='$id' ");


}
