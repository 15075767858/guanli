<?php
/**
 * Created by PhpStorm.
 * User: liuzhencai
 * Date: 16/9/11
 * Time: 下午7:11
 */

require_once('mysql_link.php');

mysqli_query($mysql, "set names utf8");

$par = $_REQUEST['par'];

$resArr = array();

if ($par) {

    $vipId = call_user_func($par, $mysql, $_REQUEST);

    json_encode($vipId);

}
//echo json_encode($resArr);
mysqli_close($mysql);
exit;

function execUpdateSql($mysql, $sql)
{


    return mysqli_query($mysql, $sql);
}

function updateVipBaseInfo($mysql, $arr)
{

    $hb_vipCardNumber = $arr['hb_vipCardNumber'];
    $hb_vipName = $arr['hb_vipName'];
    $hb_vipSex = $arr['hb_vipSex'];
    $hb_vipBirthDate = $arr['hb_vipBirthDate'];
    $hb_vipIdNumber = $arr['hb_vipIdNumber'];
    $hb_vipJiGuan = $arr['hb_vipJiGuan'];
    $hb_vipJob = $arr['hb_vipJob'];
    $hb_vipCurAddress = $arr['hb_vipCurAddress'];
    $hb_vipTelePhone = $arr['hb_vipTelePhone'];
    $hb_vipMobelPhone = $arr['hb_vipMobelPhone'];
    $hb_jinjilianxiren = $arr['hb_jinjilianxiren'];
    $hb_jjlxrTelePhone = $arr['hb_jjlxrTelePhone'];
    $hb_jjlxrMobelPhone = $arr['hb_jjlxrMobelPhone'];
    $hb_yibaokaId = $arr['hb_yibaokaId'];
    $hb_nonghebenId = $arr['hb_nonghebenId'];
    $id = $arr['id'];
    $sql = "Update `bdm246823269_db`.`huibang_vipbaseinfo` SET `hb_vipCardNumber` = '$hb_vipCardNumber',`hb_vipName` = '$hb_vipName',`hb_vipSex` = '$hb_vipSex',`hb_vipBirthDate` = '$hb_vipBirthDate',`hb_vipIdNumber` = '$hb_vipIdNumber',`hb_vipJiGuan` = '$hb_vipJiGuan',`hb_vipJob` = '$hb_vipJob',`hb_vipCurAddress` = '$hb_vipCurAddress',`hb_vipTelePhone` = '$hb_vipTelePhone',`hb_vipMobelPhone` = '$hb_vipMobelPhone',`hb_jinjilianxiren` = '$hb_jinjilianxiren',`hb_jjlxrTelePhone` = '$hb_jjlxrTelePhone',`hb_jjlxrMobelPhone` = '$hb_jjlxrMobelPhone',`hb_yibaokaId` = '$hb_yibaokaId',`hb_nonghebenId` = '$hb_nonghebenId' WHERE id = '$id'";

    return execUpdateSql($mysql, $sql);
}

function updateVipTiJianBaoGao($mysql, $arr)
{
    $hb_ManXingBing = $arr['hb_ManXingBing'];
    $hb_ManXingBingTuPian = $arr['hb_ManXingBingTuPian'];
    $hb_ZhongDaJiBing = $arr['hb_ZhongDaJiBing'];
    $hb_ZhongDaJiBingTuPian = $arr['hb_ZhongDaJiBingTuPian'];
    $hb_YiChuanJiBing = $arr['hb_YiChuanJiBing'];
    $hb_YiChuanJiBingTuPian = $arr['hb_YiChuanJiBingTuPian'];
    $hb_TiJianQingKuang = $arr['hb_TiJianQingKuang'];
    $hb_TiJianQingKuangTuPian = $arr['hb_TiJianQingKuangTuPian'];
    $hb_QiTa = $arr['hb_QiTa'];
    $hb_vipId = $arr['hb_vipId'];
    $id = $arr['id'];


    $sql = "Update `bdm246823269_db`.`huibang_vipTiJianBaoGao` SET `hb_ManXingBing` = '$hb_ManXingBing',`hb_ManXingBingTuPian` = '$hb_ManXingBingTuPian',`hb_ZhongDaJiBing` = '$hb_ZhongDaJiBing',`hb_ZhongDaJiBingTuPian` = '$hb_ZhongDaJiBingTuPian',`hb_YiChuanJiBing` = '$hb_YiChuanJiBing',`hb_YiChuanJiBingTuPian` = '$hb_YiChuanJiBingTuPian',`hb_TiJianQingKuang` = '$hb_TiJianQingKuang',`hb_TiJianQingKuangTuPian` = '$hb_TiJianQingKuangTuPian',`hb_QiTa` = '$hb_QiTa' WHERE id = '$id' ";

    return execUpdateSql($mysql, $sql);
}


function updateVipJiaoFeiJiLu($mysql, $arr)
{
    $hb_Date = $arr['hb_Date'];
    $hb_JiaoFeiJinE = $arr['hb_JiaoFeiJinE'];
    $hb_BeiZhu = $arr['hb_BeiZhu'];
    $id = $arr['id'];
    $hb_vipId = $arr['hb_vipId'];

    //$sql = "insert `bdm246823269_db`.`huibang_vipJiaoFeiJiLu`(`hb_Date`,`hb_JiaoFeiJinE`,`hb_BeiZhu`,`hb_vipId`) values('$hb_Date','$hb_JiaoFeiJinE','$hb_BeiZhu','$hb_vipId');";

    $sql = "Update `bdm246823269_db`.`huibang_vipJiaoFeiJiLu` SET `hb_Date`='$hb_Date',`hb_JiaoFeiJinE`='$hb_JiaoFeiJinE',`hb_BeiZhu `='$hb_BeiZhu' WHERE id='$id'";
    return execUpdateSql($mysql, $sql);

}

function updateVipZengSongBaoXian($mysql, $arr)
{

    $hb_BaoXianXianZhong = $arr['hb_BaoXianXianZhong'];
    $hb_BaoXianId = $arr['hb_BaoXianId'];
    $hb_ShengXiaoDate = $arr['hb_ShengXiaoDate'];
    $hb_BaoXianZeRen = $arr['hb_BaoXianZeRen'];
    $hb_YiTuoGongSi = $arr['hb_YiTuoGongSi'];

    $id = $arr['id'];

    $sql = "Update `bdm246823269_db`.`huibang_vipZengSongBaoXian` SET `hb_BaoXianXianZhong`='$hb_BaoXianXianZhong',`hb_BaoXianId`='$hb_BaoXianId',`hb_ShengXiaoDate`='$hb_ShengXiaoDate',`hb_BaoXianZeRen`='$hb_BaoXianZeRen',`hb_YiTuoGongSi`='$hb_YiTuoGongSi' WHERE id='$id'";
    $hb_vipId = $arr['hb_vipId'];
    //$sql = "insert `bdm246823269_db`.`huibang_vipZengSongBaoXian`(`hb_BaoXianXianZhong`,`hb_BaoXianId`,`hb_ShengXiaoDate`,`hb_BaoXianZeRen`,`hb_YiTuoGongSi`,`hb_vipId`) values('$hb_BaoXianXianZhong','$hb_BaoXianId','$hb_ShengXiaoDate','$hb_BaoXianZeRen','$hb_YiTuoGongSi','$hb_vipId');";
    return execUpdateSql($mysql, $sql);
}


function updateVipZhuYuanJiLu($mysql, $arr)
{

    $hb_RuYuanDate = $arr['hb_RuYuanDate'];
    $hb_ChuYuanDate = $arr['hb_ChuYuanDate'];
    $hb_ZhenDuanZhengMing = $arr['hb_ZhenDuanZhengMing'];
    $hb_YiYuanMingCheng = $arr['hb_YiYuanMingCheng'];
    $id = $arr['id'];
    $hb_vipId = $arr['hb_vipId'];

    $sql = "Update `bdm246823269_db`.`huibang_vipZhuYuanJiLu` SET `hb_RuYuanDate`='$hb_RuYuanDate',`hb_ChuYuanDate`='$hb_ChuYuanDate',`hb_ZhenDuanZhengMing`='$hb_ZhenDuanZhengMing',`hb_YiYuanMingCheng`='$hb_YiYuanMingCheng' WHERE id='$id' ";

    //$sql = "insert `bdm246823269_db`.`huibang_vipZhuYuanJiLu`(`hb_RuYuanDate`,`hb_ChuYuanDate`,`hb_ZhenDuanZhengMing`,`hb_YiYuanMingCheng`,`hb_vipId`) values('$hb_RuYuanDate','$hb_ChuYuanDate','$hb_ZhenDuanZhengMing','$hb_YiYuanMingCheng','$hb_vipId');";
    return execUpdateSql($mysql, $sql);


}


function updateVipBaoXiaoJiLu($mysql, $arr)
{
    $hb_RuYuanDate = $arr['hb_RuYuanDate'];
    $hb_ChuYuanDate = $arr['hb_ChuYuanDate'];
    $hb_HuanZheMingCheng = $arr['hb_HuanZheMingCheng'];
    $hb_YiYuanMingCheng = $arr['hb_YiYuanMingCheng'];
    $hb_BeiZhu = $arr['hb_BeiZhu'];
    $id = $arr['id'];
    $hb_vipId = $arr['hb_vipId'];

    $sql = "Update `bdm246823269_db`.`huibang_vipBaoXiaoJiLu` SET `hb_RuYuanDate`='$hb_RuYuanDate',`hb_ChuYuanDate`='$hb_ChuYuanDate',`hb_HuanZheMingCheng`='$hb_HuanZheMingCheng',`hb_YiYuanMingCheng`='$hb_YiYuanMingCheng',`hb_BeiZhu`='$hb_BeiZhu' WHERE id= '$id' ";
//    $sql = "insert `bdm246823269_db`.`huibang_vipBaoXiaoJiLu`(`hb_RuYuanDate`,`hb_ChuYuanDate`,`hb_HuanZheMingCheng`,`hb_YiYuanMingCheng`,`hb_BeiZhu`,`hb_vipId`) values('$hb_RuYuanDate','$hb_ChuYuanDate','$hb_HuanZheMingCheng','$hb_YiYuanMingCheng','$hb_BeiZhu','$hb_vipId');";

    return execUpdateSql($mysql, $sql);

}

function updateVipQiTaShiXiang($mysql, $arr)
{
    $hb_ShiXiang1 = $arr['hb_ShiXiang1'];
    $hb_ShiXiang2 = $arr['hb_ShiXiang2'];
    $hb_ShiXiang3 = $arr['hb_ShiXiang3'];
    $hb_ShiXiang4 = $arr['hb_ShiXiang4'];
    $id = $arr['id'];

    $sql = "Update `bdm246823269_db`.`huibang_vipQiTaShiXiang` SET `hb_ShiXiang1`='$hb_ShiXiang1',`hb_ShiXiang2`='$hb_ShiXiang2',`hb_ShiXiang3`='$hb_ShiXiang3',`hb_ShiXiang4`='$hb_ShiXiang4' WHERE id='$id' ";


    $hb_vipId = $arr['hb_vipId'];
    //$sql = "insert `bdm246823269_db`.`huibang_vipQiTaShiXiang`(`hb_ShiXiang1`,`hb_ShiXiang2`,`hb_ShiXiang3`,`hb_ShiXiang4`,`hb_vipId`) values('$hb_ShiXiang1','$hb_ShiXiang2','$hb_ShiXiang3','$hb_ShiXiang4','$hb_vipId');";
    return execUpdateSql($mysql, $sql);
}




















