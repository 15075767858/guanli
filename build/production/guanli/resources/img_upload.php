<?php

$fn = 'upload/' . time() . rand(100000000000, 900000000000) . '.jpg';

if ($isSuccess = move_uploaded_file($_FILES["file"]["tmp_name"], $fn)) {
    echo $fn;

} else {
    echo 0;
}
