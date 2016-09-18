Ext.define('guanli.view.tab.VipInfo', {
    extend: 'Ext.tab.Panel',

    xtype: "vipInfoTab",


    requires: [
        'guanli.view.tab.VipInfoController',
        'guanli.view.tab.VipInfoModel',
        "guanli.view.panel.addVip",
        "guanli.view.panel.BaoXianXinXi",
        "guanli.view.panel.ImgList"
    ],
    title: "会员信息管理",
    controller: 'tab-vipinfo',
    viewModel: {
        type: 'tab-vipinfo'
    },
    items: [
        {
            xtype: "addVipPanel"
        },
        {
            xtype: "baoxianxinxi"
        },

        {
            title: "删除会员"
        }, {
            title: "修改会员"
        }, {
            title: "查找会员"
        }
    ],

});
