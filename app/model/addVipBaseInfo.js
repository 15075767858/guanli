
Ext.define('guanli.model.addVipBaseInfo', {
    extend: 'Ext.data.Model',
    fields: [
        {mapping:"name > hb_vipCardNumber",name:"vipCardNumber",type:"string"},
        {mapping:"name > hb_vipName",name:"vipName",type:"string"},
        {mapping:"name > hb_vipSex",name:"vipSex",type:"string"},
        {mapping:"name > hb_vipBirthDate",name:"vipBirthDate",type:"date"},
        {mapping:"name > hb_vipIdNumber",name:"vipIdNumber",type:"string"},
        {mapping:"name > hb_vipJiGuan",name:"vipJiGuan",type:"string"},
        {mapping:"name > hb_vipJob",name:"vipJob",type:"string"},
        {mapping:"name > hb_vipCurAddress",name:"vipCurAddress",type:"string"},
        {mapping:"name > hb_vipTelePhone",name:"vipTelePhone",type:"string"},
        {mapping:"name > hb_vipMobelPhone",name:"vipMobelPhone",type:"string"},
        {mapping:"name > hb_jinjilianxiren",name:"jinjilianxiren",type:"string"},
        {mapping:"name > hb_jjlxrTelePhone",name:"jjlxrTelePhone",type:"string"},
        {mapping:"name > hb_jjlxrMobelPhone",name:"jjlxrMobelPhone",type:"string"},
        {mapping:"name > hb_yibaokaId",name:"yibaokaId",type:"string"},
        {mapping:"name > hb_nonghebenId",name:"nonghebenId",type:"string"}
    ],
    changeName:function(){
        console.log(this)

    }
});














