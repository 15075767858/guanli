<?php


/*require_once('mysql_link.php');
include_once ('mysql_utils.php');

mysqli_query($mysql, "set names utf8");



$par = $_REQUEST['par'];

if ($par) {
    $res = call_user_func($par, $mysql, $_REQUEST) or $res = 0;
}

echo json_encode($res);
mysqli_close($mysql);

exit;*/


function readUserByItem($mysql, $arr)
{
    $name = $arr['name'];
    $value = $arr['value'];
    $sort = json_decode($arr['sort']);
    $sortProperty = $sort[0]->property;
    $sortDirection = $sort[0]->direction;
    $limit = $arr['limit'];
    $start = $arr['start'];
    $arr = array();
    $sql = "select * from huibang_user WHERE $name LIKE  '%$value%' ORDER BY $sortProperty $sortDirection LIMIT $start,$limit";
    $resArr = getArray($mysql, $sql);
    $arr['topics'] = $resArr;
    $countSql = "select count(*) from huibang_user WHERE $name LIKE  '%$value%'";
    $arr['totalCount'] = getOne($mysql, $countSql)[0];
    return $arr;
}


function readUserInfoById($mysql, $arr)
{
    $id = $arr['id'];
    $sql = "select * from huibang_user  WHERE id= $id";
    return getOne($mysql, $sql);
}