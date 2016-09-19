Ext.define('guanli.view.panel.QueryVip', {
    extend: 'Ext.panel.Panel',
    xtype: "QueryVip",
    requires: [
        'guanli.view.panel.QueryVipController',
        'guanli.view.panel.QueryVipModel'
    ],

    controller: 'panel-queryvip',
    viewModel: {
        type: 'panel-queryvip'
    },
    width: "100%",
    height: "100%",

    initComponent: function () {
        var me = this;

        var form = Ext.create("Ext.form.Panel", {
            title: "请输入会员卡编号或姓名进行查询",
            defaultType: 'textfield',
            url: My.vipReadUrl + "readVipBaseInfoByItem",
            layout: "hbox",
            bodyPadding: "10",
            defaults: {
                margin: "0 10"
            },
            method: "GET",
            items: [
                {
                    flex: 2,
                    xtype: "combo",
                    fieldLabel: "查找关键字",
                    store: Ext.create("Ext.data.Store", {
                        fields: ['abbr', 'name'],
                        data: [
                            {
                                abbr: "hb_vipCardNumber",
                                name: "会员卡编号"
                            }, {
                                abbr: "hb_vipName",
                                name: "姓名"
                            }]
                    }),

                    editable:false,
                    autoSelect: true,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'abbr',
                    name: "name",
                    listeners:{
                        boxready:function(combo){
                            combo.setValue(combo.store.getAt(0))
                        }
                    }
                }, {
                    flex: 2,
                    fieldLabel: "关键字值",
                    name: "value"
                }, {
                    flex: 1,
                    xtype: "button", text: "提交",
                    handler: function () {
                        form.getForm().submit({
                            success: resFn,
                            failure: resFn
                        });
                    }
                }
            ]
        })

        function resFn(field, res) {
            grid.store.setData(res.result)
        }

        var grid = Ext.create("Ext.grid.Panel", {
            title: "查找结果",
            store: Ext.create("Ext.data.Store", {
                model: "guanli.model.addVipBaseInfo"
            }),
            columns: [

                {dataIndex: "id", text: "会员卡编号"},
                {dataIndex: "hb_vipCardNumber", text: "会员卡编号"},
                {dataIndex: "hb_vipName", text: "姓名"},
                {dataIndex: "hb_vipSex", text: "性别"},
                {dataIndex: "hb_vipBirthDate", text: "出生日期"},
                {dataIndex: "hb_vipIdNumber", text: "会员卡编号", hidden: true},
                {dataIndex: "hb_vipJiGuan", text: "籍贯", hidden: true},
                {dataIndex: "hb_vipJob", text: "职业"},
                {dataIndex: "hb_vipCurAddress", text: "现住地址", hidden: true},
                {dataIndex: "hb_vipTelePhone", text: "本人座机"},
                {dataIndex: "hb_vipMobelPhone", text: "本人手机", hidden: true},
                {dataIndex: "hb_jinjilianxiren", text: "紧急联系人", hidden: true},
                {dataIndex: "hb_jjlxrTelePhone", text: "紧急联系人座机", hidden: true},
                {dataIndex: "hb_jjlxrMobelPhone", text: "紧急联系人手机", hidden: true},
                {dataIndex: "hb_yibaokaId", text: "医保卡编号", hidden: true},
                {dataIndex: "hb_nonghebenId", text: "农合本编号"},
                {text: "操作", xtype: "widgetcolumn",
                    widget: {
                        text: "修改",
                        xtype: "button",
                        handler:function(button){
                            var record = this.$widgetRecord;
                            console.log(record)
                            var vipinfoPanel = Ext.getCmp('vipInfoManger')
                            var addPanel = vipinfoPanel.add({
                                xtype:"addVipPanel",
                            })
                            console.log(record)
                            addPanel.readVipInfo(record.data);
                        }
                    }
                }
            ]
        })
        me.items = [
            form, grid
        ]

        me.callParent();
    },
});
