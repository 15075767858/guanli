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

    $username = $arr['username'] or $_SESSION['username'];
    $password = $arr['password'] or $_SESSION['password'];
    if (!($username & $password)) {
        //if ($_SESSION['loginInfo']) {
        $loginInfo = $_SESSION['loginInfo'];

        $username = $_SESSION['username'];
        $password = $_SESSION['password'];
        $sql = "select * from huibang_user WHERE username='$username' AND password='$password'";
        $resJson = getOne($mysql, $sql) or die();
        $resJson['success']=true;
        echo json_encode($resJson);
        exit();
    }

    $sql = "select * from huibang_user WHERE username='$username' AND password='$password'";
    $resJson = getOne($mysql, $sql) or $resJson;

    if ($resJson) {
        $resJson['success'] = true;
        $_SESSION=$resJson;
        $_SESSION['loginInfo'] = json_encode($resJson);
        echo json_encode($resJson);

        exit();
    } else {
        $_SESSION['loginInfo'] = 0;
    }

}

function outLogin()
{
    session_start();
    $_SESSION['success'] = false;
    $_SESSION['username'] = false;
    $_SESSION['password'] = false;
    exit();
}
function  getSession(){
    session_start();
    echo json_encode($_SESSION);
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
