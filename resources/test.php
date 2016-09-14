<?php

require_once (dirname(__FILE__) . "/include/common.inc.php");
$sql = "insert `bdm246823269_db`.`huibang_vipbaseinfo`(`hb_vipCardNumber`) values('aaaaaaa');";
$dsql->ExecNoneQuery($sql);//执行SQL操作
echo $dsql->GetLastID();
exit();

$sql = "Select * from huibang_vipbaseinfo";
$dsql->SetQuery($sql);//将SQL查询语句格式化
$dsql->Execute();//执行SQL操作
//通过循环输出执行查询中的结果

while($row = $dsql->GetArray()){
 echo json_encode($row);
}

$row = $dsql->GetOne("Select * From huibang_vipbaseinfo where id = 1");
echo json_encode($row);


