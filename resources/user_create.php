<?php

require_once('mysql_link.php');
mysqli_query($mysql, "set names utf8");
$par = $_REQUEST['par'];
$resArr = array();
if ($par) {
    $res = call_user_func($par, $mysql, $_REQUEST);
    if ($res) {
        $resArr['success'] = true;
        $resArr['res']=$res;
    }

}

echo json_encode($resArr);
mysqli_close($mysql);
exit;

function addUser($mysql, $arr)
{

    /*    $username = $arr['username'];
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
    $CreateDate = $arr['_dc'];

    $sql = "insert `bdm246823269_db`.`huibang_user`(`username`,`password`,`user_Manager`,`addVipBaseInfo`,`addVipTiJianBaoGao`,`addVipJiaoFeiJiLu`,`addVipZengSongBaoXian`,`addVipZhuYuanJiLu`,`addVipBaoXiaoJiLu`,`addVipQiTaShiXiang`,`deleteVipBaseInfo`,`updateVipBaseInfo`,`updateVipTiJianBaoGao`,`updateVipJiaoFeiJiLu`,`updateVipZengSongBaoXian`,`updateVipZhuYuanJiLu`,`updateVipBaoXiaoJiLu`,`updateVipQiTaShiXiang`,`readVipBaseInfoByItem`,`readVipBaseInfo`,`readVipTiJianBaoGao`,`readVipJiaoFeiJiLu`,`readVipZengSongBaoXian`,`readVipZhuYuanJiLu`,`readVipBaoXiaoJiLu`,`readVipQiTaShiXiang`,`CreateDate`) values('$username','$password','$user_Manager','$addVipBaseInfo','$addVipTiJianBaoGao','$addVipJiaoFeiJiLu','$addVipZengSongBaoXian','$addVipZhuYuanJiLu','$addVipBaoXiaoJiLu','$addVipQiTaShiXiang','$deleteVipBaseInfo','$updateVipBaseInfo','$updateVipTiJianBaoGao','$updateVipJiaoFeiJiLu','$updateVipZengSongBaoXian','$updateVipZhuYuanJiLu','$updateVipBaoXiaoJiLu','$updateVipQiTaShiXiang','$readVipBaseInfoByItem','$readVipBaseInfo','$readVipTiJianBaoGao','$readVipJiaoFeiJiLu','$readVipZengSongBaoXian','$readVipZhuYuanJiLu','$readVipBaoXiaoJiLu','$readVipQiTaShiXiang','$CreateDate')";

    //$sql = "insert `bdm246823269_db`.`hb_user`(`username`,`password`,`user_Manager`,`vip_baseinfo_create`,`vip_baseinfo_read`,`vip_baseinfo_update`,`vip_baseinfo_delete`,`vip_ZhuYuanJiLu_create`,`vip_ZhuYuanJiLu_read`,`vip_ZhuYuanJiLu_update`,`vip_ZhuYuanJiLu_delete`,`vip_ZengSongBaoXian_create`,`vip_ZengSongBaoXian_read`,`vip_ZengSongBaoXian_update`,`vip_ZengSongBaoXian_delete`,`vip_TiJianBaoGao_create`,`vip_TiJianBaoGao_read`,`vip_TiJianBaoGao_update`,`vip_TiJianBaoGao_delete`,`vip_QiTaShiXiang_create`,`vip_QiTaShiXiang_read`,`vip_QiTaShiXiang_update`,`vip_QiTaShiXiang_delete`,`vip_JiaoFeiJiLu_create`,`vip_JiaoFeiJiLu_read`,`vip_JiaoFeiJiLu_update`,`vip_JiaoFeiJiLu_delete`,`vip_BaoXiaoJiLu_create`,`vip_BaoXiaoJiLu_read`,`vip_BaoXiaoJiLu_update`,`vip_BaoXiaoJiLu_delete`,`CreateDate`) values('$username' ,'$password' ,'$user_Manager' ,'$vip_baseinfo_create' ,'$vip_baseinfo_read' ,'$vip_baseinfo_update' ,'$vip_baseinfo_delete' ,'$vip_ZhuYuanJiLu_create' ,'$vip_ZhuYuanJiLu_read' ,'$vip_ZhuYuanJiLu_update' ,'$vip_ZhuYuanJiLu_delete' ,'$vip_ZengSongBaoXian_create' ,'$vip_ZengSongBaoXian_read' ,'$vip_ZengSongBaoXian_update' ,'$vip_ZengSongBaoXian_delete' ,'$vip_TiJianBaoGao_create' ,'$vip_TiJianBaoGao_read' ,'$vip_TiJianBaoGao_update' ,'$vip_TiJianBaoGao_delete' ,'$vip_QiTaShiXiang_create' ,'$vip_QiTaShiXiang_read' ,'$vip_QiTaShiXiang_update' ,'$vip_QiTaShiXiang_delete' ,'$vip_JiaoFeiJiLu_create' ,'$vip_JiaoFeiJiLu_read' ,'$vip_JiaoFeiJiLu_update' ,'$vip_JiaoFeiJiLu_delete' ,'$vip_BaoXiaoJiLu_create' ,'$vip_BaoXiaoJiLu_read' ,'$vip_BaoXiaoJiLu_update' ,'$vip_BaoXiaoJiLu_delete' ,'$CreateDate') ";
    //echo $sql;
    return execAddSql($mysql, $sql);
}

function execAddSql($mysql, $sql)
{
    mysqli_query($mysql, $sql);
    $uid = mysqli_insert_id($mysql);
    return $uid;
}
