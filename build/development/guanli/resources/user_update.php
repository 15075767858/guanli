<?php

require_once('mysql_link.php');

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
//echo json_encode($resArr);
mysqli_close($mysql);
exit;

function execUpdateSql($mysql, $sql)
{
    return mysqli_query($mysql, $sql);
}

function updateUser($mysql, $arr)
{
/*    $id=$arr['id'];
    $username = $arr['username'];
    $password = $arr['password'];
    $user_Manager = $arr['user_Manager'];
    $vip_baseinfo_create = $arr['vip_baseinfo_create'];
    $vip_baseinfo_read = $arr['vip_baseinfo_read'];
    $vip_baseinfo_update = $arr['vip_baseinfo_update'];
    $vip_baseinfo_delete = $arr['vip_baseinfo_delete'];
    $vip_ZhuYuanJiLu_create = $arr['vip_ZhuYuanJiLu_create'];
    $vip_ZhuYuanJiLu_read = $arr['vip_ZhuYuanJiLu_read'];
    $vip_ZhuYuanJiLu_update = $arr['vip_ZhuYuanJiLu_update'];
    $vip_ZhuYuanJiLu_delete = $arr['vip_ZhuYuanJiLu_delete'];
    $vip_ZengSongBaoXian_create = $arr['vip_ZengSongBaoXian_create'];
    $vip_ZengSongBaoXian_read = $arr['vip_ZengSongBaoXian_read'];
    $vip_ZengSongBaoXian_update = $arr['vip_ZengSongBaoXian_update'];
    $vip_ZengSongBaoXian_delete = $arr['vip_ZengSongBaoXian_delete'];
    $vip_TiJianBaoGao_create = $arr['vip_TiJianBaoGao_create'];
    $vip_TiJianBaoGao_read = $arr['vip_TiJianBaoGao_read'];
    $vip_TiJianBaoGao_update = $arr['vip_TiJianBaoGao_update'];
    $vip_TiJianBaoGao_delete = $arr['vip_TiJianBaoGao_delete'];
    $vip_QiTaShiXiang_create = $arr['vip_QiTaShiXiang_create'];
    $vip_QiTaShiXiang_read = $arr['vip_QiTaShiXiang_read'];
    $vip_QiTaShiXiang_update = $arr['vip_QiTaShiXiang_update'];
    $vip_QiTaShiXiang_delete = $arr['vip_QiTaShiXiang_delete'];
    $vip_JiaoFeiJiLu_create = $arr['vip_JiaoFeiJiLu_create'];
    $vip_JiaoFeiJiLu_read = $arr['vip_JiaoFeiJiLu_read'];
    $vip_JiaoFeiJiLu_update = $arr['vip_JiaoFeiJiLu_update'];
    $vip_JiaoFeiJiLu_delete = $arr['vip_JiaoFeiJiLu_delete'];
    $vip_BaoXiaoJiLu_create = $arr['vip_BaoXiaoJiLu_create'];
    $vip_BaoXiaoJiLu_read = $arr['vip_BaoXiaoJiLu_read'];
    $vip_BaoXiaoJiLu_update = $arr['vip_BaoXiaoJiLu_update'];
    $vip_BaoXiaoJiLu_delete = $arr['vip_BaoXiaoJiLu_delete'];*/

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





    $sql="Update `bdm246823269_db`.`huibang_user` SET `username`='$username',`password`='$password',`user_Manager`='$user_Manager',`addVipBaseInfo`='$addVipBaseInfo',`addVipTiJianBaoGao`='$addVipTiJianBaoGao',`addVipJiaoFeiJiLu`='$addVipJiaoFeiJiLu',`addVipZengSongBaoXian`='$addVipZengSongBaoXian',`addVipZhuYuanJiLu`='$addVipZhuYuanJiLu',`addVipBaoXiaoJiLu`='$addVipBaoXiaoJiLu',`addVipQiTaShiXiang`='$addVipQiTaShiXiang',`deleteVipBaseInfo`='$deleteVipBaseInfo',`updateVipBaseInfo`='$updateVipBaseInfo',`updateVipTiJianBaoGao`='$updateVipTiJianBaoGao',`updateVipJiaoFeiJiLu`='$updateVipJiaoFeiJiLu',`updateVipZengSongBaoXian`='$updateVipZengSongBaoXian',`updateVipZhuYuanJiLu`='$updateVipZhuYuanJiLu',`updateVipBaoXiaoJiLu`='$updateVipBaoXiaoJiLu',`updateVipQiTaShiXiang`='$updateVipQiTaShiXiang',`readVipBaseInfoByItem`='$readVipBaseInfoByItem',`readVipBaseInfo`='$readVipBaseInfo',`readVipTiJianBaoGao`='$readVipTiJianBaoGao',`readVipJiaoFeiJiLu`='$readVipJiaoFeiJiLu',`readVipZengSongBaoXian`='$readVipZengSongBaoXian',`readVipZhuYuanJiLu`='$readVipZhuYuanJiLu',`readVipBaoXiaoJiLu`='$readVipBaoXiaoJiLu',`readVipQiTaShiXiang`='$readVipQiTaShiXiang'  WHERE id ='$id' ";

    return execUpdateSql($mysql, $sql);
}




















