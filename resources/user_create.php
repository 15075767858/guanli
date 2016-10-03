<?php

/*require_once('mysql_link.php');
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
exit;*/


function addUser($mysql, $arr)
{


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



    $CreateDate = $arr['_dc'];


    $countSql = "select count(*) from `huibang_user` WHERE username = '$username'";
    if (getOne($mysql, $countSql)[0]) {
        //return array('success' => false, 'info' => "会员卡号以存在");
        echo json_encode(array('success' => false, 'info' => "用户以存在"));
        exit();
    }
    $sql = "insert `bdm246823269_db`.`huibang_user`(`username`,`password`,`user_Manager`,`addVipBaseInfo`,`addVipTiJianBaoGao`,`addVipJiaoFeiJiLu`,`addVipZengSongBaoXian`,`addVipZhuYuanJiLu`,`addVipBaoXiaoJiLu`,`addVipQiTaShiXiang`,`deleteVipBaseInfo`,`updateVipBaseInfo`,`updateVipTiJianBaoGao`,`updateVipJiaoFeiJiLu`,`updateVipZengSongBaoXian`,`updateVipZhuYuanJiLu`,`updateVipBaoXiaoJiLu`,`updateVipQiTaShiXiang`,`readVipBaseInfoByItem`,`readVipBaseInfo`,`readVipTiJianBaoGao`,`readVipJiaoFeiJiLu`,`readVipZengSongBaoXian`,`readVipZhuYuanJiLu`,`readVipBaoXiaoJiLu`,`readVipQiTaShiXiang`,`addUser`,`deleteUser`,`readUserByItem`,`updateUser`,`CreateDate`) values('$username','$password','$user_Manager','$addVipBaseInfo','$addVipTiJianBaoGao','$addVipJiaoFeiJiLu','$addVipZengSongBaoXian','$addVipZhuYuanJiLu','$addVipBaoXiaoJiLu','$addVipQiTaShiXiang','$deleteVipBaseInfo','$updateVipBaseInfo','$updateVipTiJianBaoGao','$updateVipJiaoFeiJiLu','$updateVipZengSongBaoXian','$updateVipZhuYuanJiLu','$updateVipBaoXiaoJiLu','$updateVipQiTaShiXiang','$readVipBaseInfoByItem','$readVipBaseInfo','$readVipTiJianBaoGao','$readVipJiaoFeiJiLu','$readVipZengSongBaoXian','$readVipZhuYuanJiLu','$readVipBaoXiaoJiLu','$readVipQiTaShiXiang','$addUser','$deleteUser','$readUserByItem','$updateUser','$CreateDate')";

    return execAddSql($mysql, $sql);
}

/*function execAddSql($mysql, $sql)
{
    mysqli_query($mysql, $sql);
    $uid = mysqli_insert_id($mysql);
    return $uid;
}*/
