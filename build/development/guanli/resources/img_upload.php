<?php

$par = $_REQUEST['par'];

if ($par == 'upload') {

    $fn = 'upload/' . time() . rand(100000000000, 900000000000) . '.jpg';

    if (!file_exists('upload')) {
        mkdir('upload');
    }

    if ($isSuccess = move_uploaded_file($_FILES["file"]["tmp_name"], $fn)) {
        echo $fn;

    } else {
        echo 0;
    }

}

if($par=='delete'){

    $filename = $_REQUEST['filename'];

    if(unlink($filename)){
        echo 1;
    }else{
        echo 0;
    }


}