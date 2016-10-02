<?php


session_start();
if (!$_SESSION[$par]) {
    echo json_encode(array('session' => false, 'info' => '没有权限'));
    exit();
}