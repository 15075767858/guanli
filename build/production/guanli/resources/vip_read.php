<?php
/**
 * Created by PhpStorm.
 * User: liuzhencai
 * Date: 16/9/16
 * Time: 下午9:19
 */

require_once('mysql_link.php');
$par = $_REQUEST['par'];

if ($par) {

    $res = call_user_func($par, $mysql, $_REQUEST) or $res=0;
    /*if ($vipId > 0) {
        $resArr['vipId'] = $vipId;
    } else {
        print_r($mysql);
        $resArr['isError'] = 1;
        $resArr = array_merge($_REQUEST,$resArr);
        $resArr['errorInfo'] = $Par."存储失败。";
    }*/
}

echo json_encode($res);
exit;

function readVipBaseInfo($mysql,$arr){
    $id=$_REQUEST['id'];
    $sql = "select * from huibang_vipbaseinfo  WHERE id= $id ";
    return getOne($mysql,$sql);
}
function readVipTiJianBaoGao($mysql,$arr){
    $vipId=$_REQUEST['vipId'];
    $sql = "select * from huibang_vipTiJianBaoGao WHERE hb_vipId = $vipId";
    return getOne($mysql,$sql);
}

function readVipJiaoFeiJiLu($mysql,$arr){
    //huibang_vipJiaoFeiJiLu
    $vipId=$_REQUEST['vipId'];
    $sql = "select * from huibang_vipJiaoFeiJiLu WHERE hb_vipId= $vipId";

    return getArray($mysql,$sql);
}

function readVipZengSongBaoXian($mysql,$arr){
    $vipId=$_REQUEST['vipId'];

    $sql = "select * from huibang_vipZengSongBaoXian WHERE hb_vipId = $vipId";
    return getOne($mysql,$sql);
}

function readVipZhuYuanJiLu($mysql,$arr){
    $vipId=$_REQUEST['vipId'];
    $sql = "select * from huibang_vipZhuYuanJiLu WHERE hb_vipId= $vipId";
    return getArray($mysql,$sql);
}

function readVipBaoXiaoJiLu($mysql,$arr){
    $vipId=$_REQUEST['vipId'];
    $sql = "select * from huibang_vipBaoXiaoJiLu WHERE hb_vipId= $vipId";
    return getArray($mysql,$sql);
}

function readVipQiTaShiXiang($mysql,$arr){
    $vipId=$_REQUEST['vipId'];
    $sql = "select * from huibang_vipQiTaShiXiang WHERE hb_vipId= $vipId";
    return getOne($mysql,$sql);
}


function getOne($mysql,$sql){
    $res=mysqli_query($mysql,$sql);
    $row = mysqli_fetch_array($res);
    return $row;
}
function getArray($mysql,$sql){
    $arr=array();

    $res=mysqli_query($mysql,$sql) or $res=false;
    if(!$res){
        echo "没有";
        return $res;
    }
    while($row = mysqli_fetch_array($res))
    {
        array_push($arr,$row);
    }
    return $arr;
}
