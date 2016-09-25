Ext.define('guanli.view.tab.VipInfo', {
    extend: 'Ext.tab.Panel',
    xtype: "vipInfoTab",
    requires: [
        'guanli.view.tab.VipInfoController',
        'guanli.view.tab.VipInfoModel',
        "guanli.view.panel.addVip",
        "guanli.view.panel.BaoXianXinXi",
        "guanli.view.panel.ImgList",
        "guanli.view.panel.QueryVip",
        "guanli.model.addVipBaseInfo"
    ],
    title: "会员信息管理",
    id:"vipInfoManger",
    controller: 'tab-vipinfo',
    viewModel: {
        type: 'tab-vipinfo'
    },
    bbar:[
        {text:"查找会员"},
        {text:"增加会员",handler:function(){

        }}
    ],

    addChangeVipPanel:function(data){
        var me=this;
        console.log(me)
        var appVipPanel = me.add({
            xtype:"addVipPanel",
            title:"修改会员信息"
        })
    },
    defaults:{
      closable:true,
    },
    items: [
        {
            title: "查找会员",
            xtype:"QueryVip"
        },
        {
            xtype: "addVipPanel",
            title: "增加会员"
        },
        {
            xtype: "baoxianxinxi",
            hidden:true
        }
    ],

});
