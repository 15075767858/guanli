<?php

require_once('mysql_link.php');
include_once ('mysql_utils.php');

mysqli_query($mysql, "set names utf8");

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
    //$_SESSION['success'] = false;
    //$_SESSION['username'] = false;
    //$_SESSION['password'] = false;
    $_SESSION=array();
    exit();
}

function  getSession(){
    session_start();
    echo json_encode($_SESSION);
}

