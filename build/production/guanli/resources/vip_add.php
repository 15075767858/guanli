<?php
/**
 * Created by PhpStorm.
 * User: liuzhencai
 * Date: 16/9/11
 * Time: 下午7:11
 */


require_once(dirname(__FILE__) . "/include/common.inc.php");


$par = $_REQUEST['par'];
$resArr = array();

if ($par) {

    $vipId = call_user_func($par, $dsql, $_REQUEST);

    if ($vipId > 0) {
        $resArr['vipId'] = $vipId;
    } else {
        $resArr['isError'] = 1;
        $resArr['errorInfo'] = "存储失败。";
    }
}

echo json_encode($resArr);

function addVipBaseInfo($dsql, $arr)
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
    $dsql->ExecNoneQuery($sql);//执行SQL操作
    return $dsql->GetLastID();
}

function addVipTiJianBaoGao($dsql, $arr)
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

    $sql = "insert `bdm246823269_db`.`huibang_vipTiJianBaoGao`(`hb_ManXingBing`,`hb_ManXingBingTuPian`,`hb_ZhongDaJiBing`,`hb_ZhongDaJiBingTuPian`,`hb_YiChuanJiBing`,`hb_YiChuanJiBingTuPian`,`hb_TiJianQingKuang`,`hb_TiJianQingKuangTuPian`,`hb_QiTa`,`hb_vipId`) values('$hb_ManXingBing','$hb_ManXingBingTuPian','$hb_ZhongDaJiBing','$hb_ZhongDaJiBingTuPian','$hb_YiChuanJiBing','$hb_YiChuanJiBingTuPian','$hb_TiJianQingKuang','$hb_TiJianQingKuangTuPian','$hb_QiTa','$hb_vipId');";
    $dsql->ExecNoneQuery($sql);//执行SQL操作
    return $dsql->GetLastID();

}


function addVipJiaoFeiJiLu($dsql, $arr)
{
    $hb_Date = $arr['hb_Date'];
    $hb_JiaoFeiJinE = $arr['hb_JiaoFeiJinE'];
    $hb_BeiZhu = $arr['hb_BeiZhu'];
    $hb_vipId = $arr['hb_vipId'];

    $sql = "insert `bdm246823269_db`.`huibang_vipJiaoFeiJiLu`(`hb_Date`,`hb_JiaoFeiJinE`,`hb_BeiZhu`,`hb_vipId`) values('$hb_Date','$hb_JiaoFeiJinE','$hb_BeiZhu','$hb_vipId');";
    $dsql->ExecNoneQuery($sql);//执行SQL操作
    return $dsql->GetLastID();

}

function addVipZengSongBaoXian($dsql, $arr)
{

    $hb_BaoXianXianZhong = $arr['BaoXianXianZhong'];
    $hb_BaoXianId = $arr['BaoXianId'];
    $hb_ShengXiaoDate = $arr['ShengXiaoDate'];
    $hb_BaoXianZeRen = $arr['BaoXianZeRen'];
    $hb_YiTuoGongSi = $arr['YiTuoGongSi'];
    $hb_vipId = $arr['vipId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipZengSongBaoXian`(`hb_BaoXianXianZhong`,`hb_BaoXianId`,`hb_ShengXiaoDate`,`hb_BaoXianZeRen`,`hb_YiTuoGongSi`,`hb_vipId`) values('$hb_BaoXianXianZhong','$hb_BaoXianId','$hb_ShengXiaoDate','$hb_BaoXianZeRen','$hb_YiTuoGongSi','$hb_vipId');";
    $dsql->ExecNoneQuery($sql);//执行SQL操作
    return $dsql->GetLastID();

}


function addVipZhuYuanJiLu($dsql, $arr)
{

    $hb_RuYuanDate = $arr['RuYuanDate'];
    $hb_ChuYuanDate = $arr['ChuYuanDate'];
    $hb_ZhenDuanZhengMing = $arr['ZhenDuanZhengMing'];
    $hb_vipId = $arr['vipId'];

    $sql = "insert `bdm246823269_db`.`huibang_vipZhuYuanJiLu`(`hb_RuYuanDate`,`hb_ChuYuanDate`,`hb_ZhenDuanZhengMing`,`hb_vipId`) values('$hb_RuYuanDate','$hb_ChuYuanDate','$hb_ZhenDuanZhengMing','$hb_vipId');";
    $dsql->ExecNoneQuery($sql);//执行SQL操作
    return $dsql->GetLastID();

}


function addVipBaoXiaoJiLu($dsql, $arr)
{
    $hb_RuYuanDate = $arr['hb_RuYuanDate'];
    $hb_ChuYuanDate = $arr['hb_ChuYuanDate'];
    $hb_HuanZheMingCheng = $arr['hb_HuanZheMingCheng'];
    $hb_YiYuanMingCheng = $arr['hb_YiYuanMingCheng'];
    $hb_BeiZhu = $arr['hb_BeiZhu'];
    $hb_vipId = $arr['hb_vipId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipBaoXiaoJiLu`(`hb_RuYuanDate`,`hb_ChuYuanDate`,`hb_HuanZheMingCheng`,`hb_YiYuanMingCheng`,`hb_BeiZhu`,`hb_vipId`) values('$hb_RuYuanDate','$hb_ChuYuanDate','$hb_HuanZheMingCheng','$hb_YiYuanMingCheng','$hb_BeiZhu','$hb_vipId');";
    $dsql->ExecNoneQuery($sql);//执行SQL操作
    $dsql->GetLastID();

}


function addVipQiTaShiXiang($dsql, $arr)
{

    $hb_ShiXiang1 = $arr['hb_ShiXiang1'];
    $hb_ShiXiang2 = $arr['hb_ShiXiang2'];
    $hb_ShiXiang3 = $arr['hb_ShiXiang3'];
    $hb_ShiXiang4 = $arr['hb_ShiXiang4'];
    $hb_vipId = $arr['hb_vipId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipQiTaShiXiang`(`hb_ShiXiang1`,`hb_ShiXiang2`,`hb_ShiXiang3`,`hb_ShiXiang4`,`hb_vipId`) values('$hb_ShiXiang1','$hb_ShiXiang2','$hb_ShiXiang3','$hb_ShiXiang4','$hb_vipId');";
    $dsql->ExecNoneQuery($sql);//执行SQL操作
    $dsql->GetLastID();

}




















