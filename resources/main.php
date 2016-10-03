<?php


require_once('mysql_link.php');
require('mysql_utils.php');
require($_REQUEST['cls']);
//require_once($_REQUEST['cls']);
/*$cls = $_REQUEST['cls'];*/
$par = $_REQUEST['par'];
$resArr = array();
if ($par) {

    session_start();
    if (!$_SESSION[$par]) {
        echo json_encode(array('session' => false, 'info' => '没有权限'));
        exit();
    }

    $res = call_user_func($par, $mysql, $_REQUEST);
    echo json_encode($res);
}
//echo json_encode($resArr);
mysqli_close($mysql);
exit;



