<?php

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

function execAddSql($mysql, $sql)
{
    mysqli_query($mysql, $sql);
    $uid = mysqli_insert_id($mysql);

    if ($uid) {
        return array('success' => true, 'info' => $uid);
    }
}

function execUpdateSql($mysql, $sql)
{
    mysqli_query($mysql, $sql);
    //print_r($mysql);

    $rows = $mysql->affected_rows;
    $error = mysqli_errno($mysql);
    if ($error == 0) {
        return array('success' => true, 'info' => $rows);
    } else {
        return array('success' => false, 'info' => mysqli_error($mysql));
    }

}

