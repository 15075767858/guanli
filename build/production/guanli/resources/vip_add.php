<?php
/**
 * Created by PhpStorm.
 * User: liuzhencai
 * Date: 16/9/11
 * Time: 下午7:11
 */

require_once('mysql_link.php');

$par = $_REQUEST['par'];
$resArr = array();

if ($par) {

    $vipId = call_user_func($par, $mysql, $_REQUEST);
    if ($vipId > 0) {
        $resArr['vipId'] = $vipId;
    } else {
        print_r($mysql);
        $resArr['isError'] = 1;
        $resArr = array_merge($_REQUEST,$resArr);
        $resArr['errorInfo'] = $Par."存储失败。";
    }
}
echo json_encode($resArr);
exit;

function execAddSql($mysql,$sql){
    mysqli_query($mysql, $sql);
    $uid = mysqli_insert_id($mysql);
    return $uid;
}

function addVipBaseInfo($mysql, $arr)
{
    $hb_vipCardNumber = $arr['vipCardNumber'];
    $hb_vipName = $arr['vipName'];
    $hb_vipSex = $arr['vipSex'];
    $hb_vipBirthDate = $arr['vipBirthDate'];
    $hb_vipIdNumber = $arr['vipIdNumber'];
    $hb_vipJiGuan = $arr['vipJiGuan'];
    $hb_vipJob = $arr['vipJob'];
    $hb_vipCurAddress = $arr['vipCurAddress'];
    $hb_vipTelePhone = $arr['vipTelePhone'];
    $hb_vipMobelPhone = $arr['vipMobelPhone'];
    $hb_jinjilianxiren = $arr['jinjilianxiren'];
    $hb_jjlxrTelePhone = $arr['jjlxrTelePhone'];
    $hb_jjlxrMobelPhone = $arr['jjlxrMobelPhone'];
    $hb_yibaokaId = $arr['yibaokaId'];
    $hb_nonghebenId = $arr['nonghebenId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipbaseinfo`(`hb_vipCardNumber`,`hb_vipName`,`hb_vipSex`,`hb_vipBirthDate`,`hb_vipIdNumber`,`hb_vipJiGuan`,`hb_vipJob`,`hb_vipCurAddress`,`hb_vipTelePhone`,`hb_vipMobelPhone`,`hb_jinjilianxiren`,`hb_jjlxrTelePhone`,`hb_jjlxrMobelPhone`,`hb_yibaokaId`,`hb_nonghebenId`) values('$hb_vipCardNumber','$hb_vipName','$hb_vipSex','$hb_vipBirthDate','$hb_vipIdNumber','$hb_vipJiGuan','$hb_vipJob','$hb_vipCurAddress','$hb_vipTelePhone','$hb_vipMobelPhone','$hb_jinjilianxiren','$hb_jjlxrTelePhone','$hb_jjlxrMobelPhone','$hb_yibaokaId','$hb_nonghebenId');";
    return  execAddSql($mysql,$sql);
}

function addVipTiJianBaoGao($mysql, $arr)
{
    $hb_ManXingBing = $arr['ManXingBing'];
    $hb_ManXingBingTuPian = $arr['ManXingBingTuPian'];
    $hb_ZhongDaJiBing = $arr['ZhongDaJiBing'];
    $hb_ZhongDaJiBingTuPian = $arr['ZhongDaJiBingTuPian'];
    $hb_YiChuanJiBing = $arr['YiChuanJiBing'];
    $hb_YiChuanJiBingTuPian = $arr['YiChuanJiBingTuPian'];
    $hb_TiJianQingKuang = $arr['TiJianQingKuang'];
    $hb_TiJianQingKuangTuPian = $arr['TiJianQingKuangTuPian'];
    $hb_QiTa = $arr['QiTa'];
    $hb_vipId = $arr['vipId'];

    $sql = "insert `bdm246823269_db`.`huibang_vipTiJianBaoGao`(`hb_ManXingBing`,`hb_ManXingBingTuPian`,`hb_ZhongDaJiBing`,`hb_ZhongDaJiBingTuPian`,`hb_YiChuanJiBing`,`hb_YiChuanJiBingTuPian`,`hb_TiJianQingKuang`,`hb_TiJianQingKuangTuPian`,`hb_QiTa`,`hb_vipId`) values('$hb_ManXingBing','$hb_ManXingBingTuPian','$hb_ZhongDaJiBing','$hb_ZhongDaJiBingTuPian','$hb_YiChuanJiBing','$hb_YiChuanJiBingTuPian','$hb_TiJianQingKuang','$hb_TiJianQingKuangTuPian','$hb_QiTa','$hb_vipId');";

    return  execAddSql($mysql,$sql);


}


function addVipJiaoFeiJiLu($mysql, $arr)
{
    $hb_Date = $arr['Date'];
    $hb_JiaoFeiJinE = $arr['JiaoFeiJinE'];
    $hb_BeiZhu = $arr['BeiZhu'];
    $hb_vipId = $arr['vipId'];

    $sql = "insert `bdm246823269_db`.`huibang_vipJiaoFeiJiLu`(`hb_Date`,`hb_JiaoFeiJinE`,`hb_BeiZhu`,`hb_vipId`) values('$hb_Date','$hb_JiaoFeiJinE','$hb_BeiZhu','$hb_vipId');";
    return  execAddSql($mysql,$sql);

}

function addVipZengSongBaoXian($mysql, $arr)
{

    $hb_BaoXianXianZhong = $arr['BaoXianXianZhong'];
    $hb_BaoXianId = $arr['BaoXianId'];
    $hb_ShengXiaoDate = $arr['ShengXiaoDate'];
    $hb_BaoXianZeRen = $arr['BaoXianZeRen'];
    $hb_YiTuoGongSi = $arr['YiTuoGongSi'];
    $hb_vipId = $arr['vipId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipZengSongBaoXian`(`hb_BaoXianXianZhong`,`hb_BaoXianId`,`hb_ShengXiaoDate`,`hb_BaoXianZeRen`,`hb_YiTuoGongSi`,`hb_vipId`) values('$hb_BaoXianXianZhong','$hb_BaoXianId','$hb_ShengXiaoDate','$hb_BaoXianZeRen','$hb_YiTuoGongSi','$hb_vipId');";
    return  execAddSql($mysql,$sql);


}


function addVipZhuYuanJiLu($mysql, $arr)
{

    $hb_RuYuanDate = $arr['RuYuanDate'];
    $hb_ChuYuanDate = $arr['ChuYuanDate'];
    $hb_ZhenDuanZhengMing = $arr['ZhenDuanZhengMing'];
    $hb_vipId = $arr['vipId'];

    $sql = "insert `bdm246823269_db`.`huibang_vipZhuYuanJiLu`(`hb_RuYuanDate`,`hb_ChuYuanDate`,`hb_ZhenDuanZhengMing`,`hb_vipId`) values('$hb_RuYuanDate','$hb_ChuYuanDate','$hb_ZhenDuanZhengMing','$hb_vipId');";
    return  execAddSql($mysql,$sql);


}


function addVipBaoXiaoJiLu($mysql, $arr)
{
    $hb_RuYuanDate = $arr['RuYuanDate'];
    $hb_ChuYuanDate = $arr['ChuYuanDate'];
    $hb_HuanZheMingCheng = $arr['HuanZheMingCheng'];
    $hb_YiYuanMingCheng = $arr['YiYuanMingCheng'];
    $hb_BeiZhu = $arr['BeiZhu'];
    $hb_vipId = $arr['vipId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipBaoXiaoJiLu`(`hb_RuYuanDate`,`hb_ChuYuanDate`,`hb_HuanZheMingCheng`,`hb_YiYuanMingCheng`,`hb_BeiZhu`,`hb_vipId`) values('$hb_RuYuanDate','$hb_ChuYuanDate','$hb_HuanZheMingCheng','$hb_YiYuanMingCheng','$hb_BeiZhu','$hb_vipId');";

    return  execAddSql($mysql,$sql);

}

function addVipQiTaShiXiang($mysql, $arr)
{
    $hb_ShiXiang1 = $arr['ShiXiang1'];
    $hb_ShiXiang2 = $arr['ShiXiang2'];
    $hb_ShiXiang3 = $arr['ShiXiang3'];
    $hb_ShiXiang4 = $arr['ShiXiang4'];
    $hb_vipId = $arr['vipId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipQiTaShiXiang`(`hb_ShiXiang1`,`hb_ShiXiang2`,`hb_ShiXiang3`,`hb_ShiXiang4`,`hb_vipId`) values('$hb_ShiXiang1','$hb_ShiXiang2','$hb_ShiXiang3','$hb_ShiXiang4','$hb_vipId');";
    return  execAddSql($mysql,$sql);
}




















