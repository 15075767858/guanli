Ext.define('guanli.view.panel.BaoXianXinXi', {
    extend: 'Ext.form.Panel',
    xtype:"baoxianxinxi",
    requires: [
        'guanli.view.panel.BaoXianXinXiController',
        'guanli.view.panel.BaoXianXinXiModel'
    ],

    controller: 'panel-baoxianxinxi',
    viewModel: {
        type: 'panel-baoxianxinxi'
    },
    width: "100%",
    height: "100%",
    title: "增加会员",
    defaults: {
        xtype: "fieldset",
        defaultType: "textfield",
        width: "100%",
        collapsible: true,
        layout: {
            type: "table",
            columns: 10,
            tdAttrs: {
                style: 'padding:0 5px 0 15px;'
            }
        }
    },
    items: [
        {
            title: "会员卡基本信息",
            defaults: {
                width: "100%",
                colspan: 5,
            },
            items:[
                {
                    fieldLabel: "会员卡名称",
                },
                {
                    fieldLabel: "激活日期",
                    xtype:"datefield",
                },
                {
                    fieldLabel:"持卡人姓名"
                },
                {
                    fieldLabel:"身份证号"
                },
                {
                    fieldLabel:"职业类别"
                },
                {
                    fieldLabel:"服务期限"
                }
            ]
        }
    ]
});
