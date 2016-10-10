<?php
/**
 * Created by PhpStorm.
 * User: liuzhencai
 * Date: 16/9/16
 * Time: 下午9:19
 */

//require_once('mysql_link.php');
//mysqli_query($mysql, "set names utf8");

/*$par = $_REQUEST['par'];

if ($par) {

    $res = call_user_func($par, $mysql, $_REQUEST) or $res = 0;



}

echo json_encode($res);
mysqli_close($mysql);

exit;*/


function readVipBaseInfoByItem($mysql, $arr)
{

    $name = $_REQUEST['name'];
    $value = $_REQUEST['value'];
    $sort = json_decode($_REQUEST['sort']);
    $sortProperty = $sort[0]->property;
    $sortDirection = $sort[0]->direction;
    $limit = $_REQUEST['limit'];
    $start = $_REQUEST['start'];
    $arr = array();
    $sql = "select * from huibang_vipbaseinfo WHERE $name LIKE  '%$value%' ORDER BY $sortProperty $sortDirection LIMIT $start,$limit";
    //echo $sql;
    $resArr = getArray($mysql, $sql);
    $arr['topics'] = $resArr;
    $countSql="select count(*) from huibang_vipbaseinfo WHERE $name LIKE  '%$value%'";
    $arr['totalCount'] = getOne($mysql,$countSql)[0];
    return $arr;
}

function readVipBaseInfo($mysql, $arr)
{
    $id = $_REQUEST['vipId'];

    $sql = "select * from huibang_vipbaseinfo  WHERE id= $id";
    return getOne($mysql, $sql);
}


function readVipTiJianBaoGao($mysql, $arr)
{
    $vipId = $_REQUEST['vipId'];
    $sql = "select * from huibang_vipTiJianBaoGao WHERE hb_vipId = $vipId";
    return getOne($mysql, $sql);
}


function readVipJiaoFeiJiLu($mysql, $arr)
{
    //huibang_vipJiaoFeiJiLu
    $vipId = $_REQUEST['vipId'];
    $sql = "select * from huibang_vipJiaoFeiJiLu WHERE hb_vipId= $vipId";

    return getArray($mysql, $sql);
}


function readVipZengSongBaoXian($mysql, $arr)
{
    $vipId = $_REQUEST['vipId'];

    $sql = "select * from huibang_vipZengSongBaoXian WHERE hb_vipId = $vipId";
    return getOne($mysql, $sql);
}


function readVipZhuYuanJiLu($mysql, $arr)
{
    $vipId = $_REQUEST['vipId'];
    $sql = "select * from huibang_vipZhuYuanJiLu WHERE hb_vipId= $vipId";
    return getArray($mysql, $sql);
}


function readVipBaoXiaoJiLu($mysql, $arr)
{
    $vipId = $_REQUEST['vipId'];
    $sql = "select * from huibang_vipBaoXiaoJiLu WHERE hb_vipId= $vipId";
    return getArray($mysql, $sql);
}


function readVipQiTaShiXiang($mysql, $arr)
{
    $vipId = $_REQUEST['vipId'];
    $sql = "select * from huibang_vipQiTaShiXiang WHERE hb_vipId= $vipId";
    return getOne($mysql, $sql);
}



