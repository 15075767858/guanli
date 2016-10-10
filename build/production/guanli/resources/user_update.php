<?php

/*require_once('mysql_link.php');

mysqli_query($mysql, "set names utf8");

$par = $_REQUEST['par'];

$resArr = array();

if ($par) {


    $vipId = call_user_func($par, $mysql, $_REQUEST);
    json_encode($vipId);
    if ($vipId > 0) {
        $resArr['vipId'] = $vipId;
    } else {
        print_r($mysql);
        $resArr['isError'] = 1;
        $resArr = array_merge($_REQUEST, $resArr);
        $resArr['errorInfo'] = $par . "存储失败。";
    }
}
mysqli_close($mysql);
exit;*/

/*function execUpdateSql($mysql, $sql)
{
    return mysqli_query($mysql, $sql);
}*/



function updateUser($mysql, $arr)
{

    $id=$arr['id'];
    $username = $arr['username'];
    $password = $arr['password'];
    $user_Manager = $arr['user_Manager'];
    $addVipBaseInfo = $arr['addVipBaseInfo'];
    $addVipTiJianBaoGao = $arr['addVipTiJianBaoGao'];
    $addVipJiaoFeiJiLu = $arr['addVipJiaoFeiJiLu'];
    $addVipZengSongBaoXian = $arr['addVipZengSongBaoXian'];
    $addVipZhuYuanJiLu = $arr['addVipZhuYuanJiLu'];
    $addVipBaoXiaoJiLu = $arr['addVipBaoXiaoJiLu'];
    $addVipQiTaShiXiang = $arr['addVipQiTaShiXiang'];
    $deleteVipBaseInfo = $arr['deleteVipBaseInfo'];
    $updateVipBaseInfo = $arr['updateVipBaseInfo'];
    $updateVipTiJianBaoGao = $arr['updateVipTiJianBaoGao'];
    $updateVipJiaoFeiJiLu = $arr['updateVipJiaoFeiJiLu'];
    $updateVipZengSongBaoXian = $arr['updateVipZengSongBaoXian'];
    $updateVipZhuYuanJiLu = $arr['updateVipZhuYuanJiLu'];
    $updateVipBaoXiaoJiLu = $arr['updateVipBaoXiaoJiLu'];
    $updateVipQiTaShiXiang = $arr['updateVipQiTaShiXiang'];
    $readVipBaseInfoByItem = $arr['readVipBaseInfoByItem'];
    $readVipBaseInfo = $arr['readVipBaseInfo'];
    $readVipTiJianBaoGao = $arr['readVipTiJianBaoGao'];
    $readVipJiaoFeiJiLu = $arr['readVipJiaoFeiJiLu'];
    $readVipZengSongBaoXian = $arr['readVipZengSongBaoXian'];
    $readVipZhuYuanJiLu = $arr['readVipZhuYuanJiLu'];
    $readVipBaoXiaoJiLu = $arr['readVipBaoXiaoJiLu'];
    $readVipQiTaShiXiang = $arr['readVipQiTaShiXiang'];

    $addUser=$arr['addUser'];
    $deleteUser=$arr['deleteUser'];
    $readUserByItem=$arr['readUserByItem'];
    $updateUser=$arr['updateUser'];





    $sql="Update `bdm246823269_db`.`huibang_user` SET `username`='$username',`password`='$password',`user_Manager`='$user_Manager',`addVipBaseInfo`='$addVipBaseInfo',`addVipTiJianBaoGao`='$addVipTiJianBaoGao',`addVipJiaoFeiJiLu`='$addVipJiaoFeiJiLu',`addVipZengSongBaoXian`='$addVipZengSongBaoXian',`addVipZhuYuanJiLu`='$addVipZhuYuanJiLu',`addVipBaoXiaoJiLu`='$addVipBaoXiaoJiLu',`addVipQiTaShiXiang`='$addVipQiTaShiXiang',`deleteVipBaseInfo`='$deleteVipBaseInfo',`updateVipBaseInfo`='$updateVipBaseInfo',`updateVipTiJianBaoGao`='$updateVipTiJianBaoGao',`updateVipJiaoFeiJiLu`='$updateVipJiaoFeiJiLu',`updateVipZengSongBaoXian`='$updateVipZengSongBaoXian',`updateVipZhuYuanJiLu`='$updateVipZhuYuanJiLu',`updateVipBaoXiaoJiLu`='$updateVipBaoXiaoJiLu',`updateVipQiTaShiXiang`='$updateVipQiTaShiXiang',`readVipBaseInfoByItem`='$readVipBaseInfoByItem',`readVipBaseInfo`='$readVipBaseInfo',`readVipTiJianBaoGao`='$readVipTiJianBaoGao',`readVipJiaoFeiJiLu`='$readVipJiaoFeiJiLu',`readVipZengSongBaoXian`='$readVipZengSongBaoXian',`readVipZhuYuanJiLu`='$readVipZhuYuanJiLu',`readVipBaoXiaoJiLu`='$readVipBaoXiaoJiLu',`readVipQiTaShiXiang`='$readVipQiTaShiXiang',`addUser`='$addUser',`deleteUser`='$deleteUser',`readUserByItem`='$readUserByItem',`updateUser`='$updateUser'  WHERE id ='$id' ";


    return execUpdateSql($mysql, $sql);
}


