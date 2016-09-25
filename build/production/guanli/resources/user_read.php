<?php


require_once('mysql_link.php');
mysqli_query($mysql, "set names utf8");


setcookie("aa", "bb", time() + 60);

$par = $_REQUEST['par'];

if ($par) {
    $res = call_user_func($par, $mysql, $_REQUEST) or $res = 0;
}

echo json_encode($res);
mysqli_close($mysql);

exit;


function login($mysql, $arr)
{
    session_start();
    if ($_SESSION['loginInfo']) {
        echo $_SESSION['loginInfo'];
        exit();
    }

    $username = $arr['username'];
    $password = $arr['password'];
    $sql = "select * from hb_user WHERE username='$username' AND password='$password'";

    $resJson = getOne($mysql, $sql) or $resJson;

    if($resJson){
    $_SESSION['loginInfo'] = json_encode($resJson);
    }else{
        $_SESSION['loginInfo']='';
    }
    echo json_encode($resJson);

    exit();
}

function outLogin()
{
    session_start();
    $_SESSION['loginInfo'] ='';
    exit();
}

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
    $sql = "select * from hb_user WHERE $name LIKE  '%$value%' ORDER BY $sortProperty $sortDirection LIMIT $start,$limit";
    $resArr = getArray($mysql, $sql);
    $arr['topics'] = $resArr;
    $countSql = "select count(*) from hb_user WHERE $name LIKE  '%$value%'";
    $arr['totalCount'] = getOne($mysql, $countSql)[0];
    return $arr;
}

function readUserInfoById($mysql, $arr)
{
    $id = $arr['id'];
    $sql = "select * from hb_user  WHERE id= $id";
    return getOne($mysql, $sql);
}


function getOne($mysql, $sql)
{
    $res = mysqli_query($mysql, $sql);
    $row = mysqli_fetch_array($res);
    return $row;
}

function getArray($mysql, $sql)
{
    $arr = array();
    $res = mysqli_query($mysql, $sql) or $res = false;
    if (!$res) {
        return $res;
    }
    while ($row = mysqli_fetch_array($res)) {
        array_push($arr, $row);
    }
    return $arr;
}
