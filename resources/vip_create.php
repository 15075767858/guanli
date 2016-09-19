<?php
/**
 * Created by PhpStorm.
 * User: liuzhencai
 * Date: 16/9/11
 * Time: 下午7:11
 */

require_once('mysql_link.php');
mysqli_set_charset($mysql,'utf-8');

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

    $hb_vipCardNumber = iconv('UTF-8', 'gb2312',$arr['hb_vipCardNumber']);
    $hb_vipName = iconv('UTF-8', 'gb2312',$arr['hb_vipName']);
    $hb_vipSex = iconv('UTF-8', 'gb2312',$arr['hb_vipSex']);
    $hb_vipBirthDate = iconv('UTF-8', 'gb2312',$arr['hb_vipBirthDate']);
    $hb_vipIdNumber = iconv('UTF-8', 'gb2312',$arr['hb_vipIdNumber']);
    $hb_vipJiGuan = iconv('UTF-8', 'gb2312',$arr['hb_vipJiGuan']);
    $hb_vipJob = iconv('UTF-8', 'gb2312',$arr['hb_vipJob']);
    $hb_vipCurAddress = iconv('UTF-8', 'gb2312',$arr['hb_vipCurAddress']);
    $hb_vipTelePhone = iconv('UTF-8', 'gb2312',$arr['hb_vipTelePhone']);
    $hb_vipMobelPhone = iconv('UTF-8', 'gb2312',$arr['hb_vipMobelPhone']);
    $hb_jinjilianxiren = iconv('UTF-8', 'gb2312',$arr['hb_jinjilianxiren']);
    $hb_jjlxrTelePhone = iconv('UTF-8', 'gb2312',$arr['hb_jjlxrTelePhone']);
    $hb_jjlxrMobelPhone = iconv('UTF-8', 'gb2312',$arr['hb_jjlxrMobelPhone']);
    $hb_yibaokaId = iconv('UTF-8', 'gb2312',$arr['hb_yibaokaId']);
    $hb_nonghebenId = iconv('UTF-8', 'gb2312',$arr['hb_nonghebenId']);
    $CreateDate=iconv('UTF-8', 'gb2312',$arr['CreateDate']);

    $sql = "insert  `bdm246823269_db`.`huibang_vipbaseinfo`(`CreateDate`,`hb_vipCardNumber`,`hb_vipName`,`hb_vipSex`,`hb_vipBirthDate`,`hb_vipIdNumber`,`hb_vipJiGuan`,`hb_vipJob`,`hb_vipCurAddress`,`hb_vipTelePhone`,`hb_vipMobelPhone`,`hb_jinjilianxiren`,`hb_jjlxrTelePhone`,`hb_jjlxrMobelPhone`,`hb_yibaokaId`,`hb_nonghebenId`) values('$CreateDate','$hb_vipCardNumber','$hb_vipName','$hb_vipSex','$hb_vipBirthDate','$hb_vipIdNumber','$hb_vipJiGuan','$hb_vipJob','$hb_vipCurAddress','$hb_vipTelePhone','$hb_vipMobelPhone','$hb_jinjilianxiren','$hb_jjlxrTelePhone','$hb_jjlxrMobelPhone','$hb_yibaokaId','$hb_nonghebenId');";
    return  execAddSql($mysql,$sql);
}

function addVipTiJianBaoGao($mysql, $arr)
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

    return  execAddSql($mysql,$sql);
}


function addVipJiaoFeiJiLu($mysql, $arr)
{
    $hb_Date = $arr['hb_Date'];
    $hb_JiaoFeiJinE = $arr['hb_JiaoFeiJinE'];
    $hb_BeiZhu = $arr['hb_BeiZhu'];
    $hb_vipId = $arr['hb_vipId'];

    $sql = "insert `bdm246823269_db`.`huibang_vipJiaoFeiJiLu`(`hb_Date`,`hb_JiaoFeiJinE`,`hb_BeiZhu`,`hb_vipId`) values('$hb_Date','$hb_JiaoFeiJinE','$hb_BeiZhu','$hb_vipId');";
    return  execAddSql($mysql,$sql);

}

function addVipZengSongBaoXian($mysql, $arr)
{

    $hb_BaoXianXianZhong = $arr['hb_BaoXianXianZhong'];
    $hb_BaoXianId = $arr['hb_BaoXianId'];
    $hb_ShengXiaoDate = $arr['hb_ShengXiaoDate'];
    $hb_BaoXianZeRen = $arr['hb_BaoXianZeRen'];
    $hb_YiTuoGongSi = $arr['hb_YiTuoGongSi'];
    $hb_vipId = $arr['hb_vipId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipZengSongBaoXian`(`hb_BaoXianXianZhong`,`hb_BaoXianId`,`hb_ShengXiaoDate`,`hb_BaoXianZeRen`,`hb_YiTuoGongSi`,`hb_vipId`) values('$hb_BaoXianXianZhong','$hb_BaoXianId','$hb_ShengXiaoDate','$hb_BaoXianZeRen','$hb_YiTuoGongSi','$hb_vipId');";
    return  execAddSql($mysql,$sql);


}


function addVipZhuYuanJiLu($mysql, $arr)
{

    $hb_RuYuanDate = $arr['hb_RuYuanDate'];
    $hb_ChuYuanDate = $arr['hb_ChuYuanDate'];
    $hb_ZhenDuanZhengMing = $arr['hb_ZhenDuanZhengMing'];
    $hb_YiYuanMingCheng = $arr['hb_YiYuanMingCheng'];

    $hb_vipId = $arr['hb_vipId'];

    $sql = "insert `bdm246823269_db`.`huibang_vipZhuYuanJiLu`(`hb_RuYuanDate`,`hb_ChuYuanDate`,`hb_ZhenDuanZhengMing`,`hb_YiYuanMingCheng`,`hb_vipId`) values('$hb_RuYuanDate','$hb_ChuYuanDate','$hb_ZhenDuanZhengMing','$hb_YiYuanMingCheng','$hb_vipId');";
    return  execAddSql($mysql,$sql);


}


function addVipBaoXiaoJiLu($mysql, $arr)
{
    $hb_RuYuanDate = $arr['hb_RuYuanDate'];
    $hb_ChuYuanDate = $arr['hb_ChuYuanDate'];
    $hb_HuanZheMingCheng = $arr['hb_HuanZheMingCheng'];
    $hb_YiYuanMingCheng = $arr['hb_YiYuanMingCheng'];
    $hb_BeiZhu = $arr['hb_BeiZhu'];
    $hb_vipId = $arr['hb_vipId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipBaoXiaoJiLu`(`hb_RuYuanDate`,`hb_ChuYuanDate`,`hb_HuanZheMingCheng`,`hb_YiYuanMingCheng`,`hb_BeiZhu`,`hb_vipId`) values('$hb_RuYuanDate','$hb_ChuYuanDate','$hb_HuanZheMingCheng','$hb_YiYuanMingCheng','$hb_BeiZhu','$hb_vipId');";

    return  execAddSql($mysql,$sql);

}

function addVipQiTaShiXiang($mysql, $arr)
{
    $hb_ShiXiang1 = $arr['hb_ShiXiang1'];
    $hb_ShiXiang2 = $arr['hb_ShiXiang2'];
    $hb_ShiXiang3 = $arr['hb_ShiXiang3'];
    $hb_ShiXiang4 = $arr['hb_ShiXiang4'];
    $hb_vipId = $arr['hb_vipId'];
    $sql = "insert `bdm246823269_db`.`huibang_vipQiTaShiXiang`(`hb_ShiXiang1`,`hb_ShiXiang2`,`hb_ShiXiang3`,`hb_ShiXiang4`,`hb_vipId`) values('$hb_ShiXiang1','$hb_ShiXiang2','$hb_ShiXiang3','$hb_ShiXiang4','$hb_vipId');";
    return  execAddSql($mysql,$sql);
}




















