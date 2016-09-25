<?php

require_once('mysql_link.php');
mysqli_query($mysql, "set names utf8");

$par = $_REQUEST['par'];
if ($par) {

    $vipId = call_user_func($par, $mysql, $_REQUEST);

}
mysqli_close($mysql);


function deleteVipBaseInfo($mysql, $arr)
{
    $id = $arr['id'];
    mysqli_query($mysql, "DELETE FROM `huibang_vipbaseinfo` WHERE `id` ='$id' ");
    mysqli_query($mysql, "DELETE FROM `huibang_vipbaseinfo` WHERE hb_vipId='$id' ");
    mysqli_query($mysql, "DELETE FROM `huibang_vipTiJianBaoGao` WHERE hb_vipId='$id' ");
    mysqli_query($mysql, "DELETE FROM `huibang_vipJiaoFeiJiLu` WHERE hb_vipId='$id' ");
    mysqli_query($mysql, "DELETE FROM `huibang_vipZengSongBaoXian` WHERE hb_vipId='$id' ");
    mysqli_query($mysql, "DELETE FROM `huibang_vipZhuYuanJiLu` WHERE hb_vipId='$id' ");
    mysqli_query($mysql, "DELETE FROM `huibang_vipBaoXiaoJiLu` WHERE hb_vipId='$id' ");
    mysqli_query($mysql, "DELETE FROM `huibang_vipQiTaShiXiang` WHERE hb_vipId='$id' ");

}
