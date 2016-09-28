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
    title:"会员查找",
    width: "100%",
    height: "100%",
    scrollable: "y",

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
                            }, {
                                abbr: "hb_vipJob",
                                name: "职业"
                            }, {
                                abbr: "hb_vipMobelPhone",
                                name: "手机"
                            }, {
                                abbr: "hb_vipTelePhone",
                                name: "座机"
                            }
                        ]
                    }),

                    editable: false,
                    autoSelect: true,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'abbr',
                    name: "name",
                    listeners: {
                        boxready: function (combo) {
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
                        /*form.getForm().submit({
                         success: resFn,
                         failure: resFn
                         });
                         */
                        var values = form.getForm().getValues();
                        grid.store.proxy.setUrl(My.vipReadUrl + "readVipBaseInfoByItem&name=" + values.name + "&value=" + values.value)
                        grid.store.load();
                    }
                }
            ]
        })

        function resFn(field, res) {
            grid.store.setData(res.result)
        }

        var gridStore = Ext.create("Ext.data.Store", {
            model: "guanli.model.addVipBaseInfo",
            remoteSort: true,
            sorters: [{
                property: 'CreateDate',
                direction: 'ASC'
            }],
            sortOnLoad: false,
            pageSize: 25,
            autoLoad: true,
            proxy: {
                type: "ajax",
                url: "resources/vip_read.php?par=readVipBaseInfoByItem&name=hb_vipCardNumber&value=&_dc=1474329240807&limit=10",
                reader: {
                    type: "json",
                    rootProperty: 'topics',
                    totalProperty: 'totalCount'
                }
            }
        });

        var grid = Ext.create("Ext.grid.Panel", {
            title: "查找结果",
            store: gridStore,
            height: 600,

            columns: [
                {dataIndex: "id", hidden: true},
                {dataIndex: "hb_vipCardNumber", text: "会员卡编号", flex: 1},
                {dataIndex: "hb_vipName", text: "姓名", flex: 1},
                {dataIndex: "hb_vipSex", text: "性别", flex: 1},
                {dataIndex: "hb_vipBirthDate", text: "出生日期", flex: 1, hidden: true},
                {dataIndex: "hb_vipIdNumber", text: "会员卡编号", hidden: true},
                {dataIndex: "hb_vipJiGuan", text: "籍贯", hidden: true},
                {dataIndex: "hb_vipJob", text: "职业", flex: 1},
                {dataIndex: "hb_vipCurAddress", text: "现住地址", hidden: true},
                {dataIndex: "hb_vipTelePhone", text: "本人座机", flex: 1},
                {dataIndex: "hb_vipMobelPhone", text: "本人手机", hidden: true},
                {dataIndex: "hb_jinjilianxiren", text: "紧急联系人", hidden: true},
                {dataIndex: "hb_jjlxrTelePhone", text: "紧急联系人座机", hidden: true},
                {dataIndex: "hb_jjlxrMobelPhone", text: "紧急联系人手机", hidden: true},
                {dataIndex: "hb_yibaokaId", text: "医保卡编号", hidden: true},
                {dataIndex: "hb_nonghebenId", text: "农合本编号", flex: 1},
                {
                    dataIndex: "CreateDate", text: "创建时间", flex: 2, renderer: function (value) {
                    return new Date(parseInt(value)).toLocaleString()
                }
                },

                {
                    text: "修改", xtype: "widgetcolumn", flex: 1,
                    widget: {
                        text: "修改",
                        xtype: "button",
                        handler: function (button) {
                            var record = this.$widgetRecord;
                            console.log(record)
                            var vipinfoPanel = Ext.getCmp('vipInfoManger')
                            var addPanel = vipinfoPanel.add({
                                xtype: "addVipPanel",
                                title: "修改会员信息",
                                useType: "update"
                            })
                            vipinfoPanel.setActiveTab(addPanel)
                            addPanel.readVipInfo(record.data);
                        }
                    }
                },

                {
                    text: "删除",
                    xtype: "widgetcolumn",
                    widget: {
                        xtype: "button",
                        text: "删除",
                        handler: function () {
                            var record = this.$widgetRecord;
                            if(!parseInt(My.loginInfo['deleteVipBaseInfo'])){
                                Ext.Msg.alert("消息","没有权限。")
                                return ;
                            }
                            Ext.Msg.confirm("删除会员", "是否要删除会员" + record.data.hb_vipName, function (isDel) {
                                console.log(arguments)
                                if (isDel == "no") {
                                    return;
                                }
                                My.AjaxPost(My.vipDeleteUrl + "deleteVipBaseInfo", {id: record.id}, function (response) {
                                    grid.store.reload();
                                    Ext.Msg.alert("消息", "删除操作完成" + response.responseText)
                                })
                            })
                        }
                    }
                }
            ],
            bbar: {
                store: gridStore,
                xtype: 'pagingtoolbar',
                displayInfo: true,
                displayMsg: '显示 {0} - {1} 条数据 , 共 {2} 条',
                emptyMsg: "没有数据",

            }
        })
        me.items = [
            form, grid
        ]

        me.callParent();
    }
});
