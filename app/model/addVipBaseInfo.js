
Ext.define('guanli.model.addVipBaseInfo', {
    extend: 'Ext.data.Model',
    fields: [
        {name:"hb_vipCardNumber",type:"string"},
        {name:"hb_vipName",type:"string"},
        {name:"hb_vipSex",type:"string"},
        {name:"hb_vipBirthDate",type:"date"},
        {name:"hb_vipIdNumber",type:"string"},
        {name:"hb_vipJiGuan",type:"string"},
        {name:"hb_vipJob",type:"string"},
        {name:"hb_vipCurAddress",type:"string"},
        {name:"hb_vipTelePhone",type:"string"},
        {name:"hb_vipMobelPhone",type:"string"},
        {name:"hb_jinjilianxiren",type:"string"},
        {name:"hb_jjlxrTelePhone",type:"string"},
        {name:"hb_jjlxrMobelPhone",type:"string"},
        {name:"hb_yibaokaId",type:"string"},
        {name:"hb_nonghebenId",type:"string"}
    ],
    xtype:"addVipBaseInfoModel",
    changeName:function(){
        console.log(this)

    }
});














