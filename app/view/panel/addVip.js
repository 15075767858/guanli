Ext.define('guanli.view.panel.addVip', {
    extend: 'Ext.form.Panel',
    xtype: "addVipPanel",
    requires: [
        'guanli.view.panel.addVipController',
        'guanli.view.panel.addVipModel'
    ],
    scrollable: true,
    controller: 'panel-addvip',
    viewModel: {
        type: 'panel-addvip'
    },
    width: "100%",
    height: "100%",
    title: "增加会员",

    tbar: [
        {
            text: "提交", handler: function (button) {

            var formPanel = button.up("form")
            var items = formPanel.items.items;
            for (var i = 0; i < items.length; i++) {
                if (items[i].addCommit) {
                    //console.log(items[i].addCommit)
                    items[i].addCommit();
                }
            }
        }
        }
    ],
    defaults: {
        xtype: "fieldset",
        //xtype: "form",
        //bodyPadding:10,
        defaultType: "textfield",
        width: "100%",
        collapsible: true,
        layout: {
            type: "table",
            columns: 10,
            tdAttrs: {
                style: 'padding:0 5px 0 15px;'
            }
        },
        addCommit: function () {
            var me = this;
            var data = me.getFormData();
            if (!data) {
                return;
            }

            var url = 'http://bxu2341910074.my3w.com/vip_add.php?par=' + me.addUrl
            //url = 'resources/vip_add.php?par='+me.addUrl
            My.Ajax(url,
                data,
                function (response) {
                    var resJson = Ext.decode(response.responseText)
                    if (!resJson.isError) {
                        if (resJson.vipId) {
                            me.setVipId(resJson.vipId);
                        }
                    } else {
                        Ext.Msg.alert("消息", "存储会员基本信息失败,失败原因" + resJson['errorInfo']);
                    }
                }
            )

        }
    },
    items: [
        {
            title: "会员基本信息",
            defaults: {
                width: "100%",
                colspan: 3,
            },
            addUrl: "addVipBaseInfo",
            setVipId: function (id) {
                var me = this;
                var formPanel = me.up("form");
                formPanel.vipId = id;
            },
            getFormData: function () {
                var me = this;
                var items = me.items.items;
                var ojson = {};
                for (var i = 0; i < items.length; i++) {
                    var name = items[i].name;
                    ojson[name] = items[i].getRawValue();
                }
                return ojson;
            },
            items: [
                {
                    xtype: "hiddenfield",
                    name: "id"
                },
                {
                    fieldLabel: "会员卡编号",
                    name: "vipCardNumber",
                    colspan: 10
                }, {
                    fieldLabel: "  姓名",
                    name: "vipName"
                }, {
                    fieldLabel: "  性别",
                    name: "vipSex",
                    xtype: "combo",
                    store: ['男', "女"]
                }, {
                    fieldLabel: "出生日期",
                    name: "vipBirthDate",
                    format: 'Y-m-d',
                    xtype: "datefield",
                    colspan: 4
                }, {
                    fieldLabel: "身份证号",
                    name: "vipIdNumber"
                }, {
                    fieldLabel: "籍贯",
                    name: "vipJiGuan"
                }, {
                    fieldLabel: "职业",
                    name: "vipJob",
                    colspan: 4
                }, {
                    fieldLabel: "现住地址",
                    name: "vipCurAddress"
                },
                {
                    fieldLabel: "座机:",
                    name: "vipTelePhone"
                }, {
                    fieldLabel: "手机",
                    name: "vipMobelPhone",
                    colspan: 4
                },
                {
                    fieldLabel: "紧急联系人",
                    name: "jinjilianxiren"
                },
                {
                    fieldLabel: "座机:",
                    name: "jjlxrTelePhone"
                }, {
                    fieldLabel: "手机",
                    name: "jjlxrMobelPhone",
                    colspan: 4
                }, {
                    fieldLabel: "医保卡编号",
                    name: "yibaokaId",
                    colspan: 5
                }, {
                    fieldLabel: "农合本编号",
                    name: "nonghebenId",
                    colspan: 5
                }

            ]
        },
        {
            title: "会员体检报告",
            defaults: {
                colspan: 5,
                width: "100%"
            },
            addUrl: "addVipTiJianBaoGao",

            getFormData: function () {
                var me = this;
                var items = me.items.items;
                var ojson = {};
                for (var i = 0; i < items.length; i++) {
                    var name = items[i].name
                    ojson[name] = items[i].getRawValue();
                }
                var formPanel = me.up("form");
                if (!formPanel.vipId) {
                    Ext.Msg.alert("异常信息", "会员ID不存在");
                    return null;
                }
                ojson['vipId'] = formPanel.vipId;
                return ojson;
            },
            items: [
                {
                    fieldLabel: "慢性病",
                    name: "ManXingBing"
                },
                Ext.create("guanli.view.vip.VipAddImagesFieldContainer", {
                    name: "ManXingBingTuPian"
                }),
                {
                    fieldLabel: "重大疾病",
                    name: "ZhongDaJiBing"
                },
                Ext.create("guanli.view.vip.VipAddImagesFieldContainer", {
                    name: "ZhongDaJiBingTuPian"
                }),
                {
                    fieldLabel: "遗传疾病",
                    name: "YiChuanJiBing"
                },

                Ext.create("guanli.view.vip.VipAddImagesFieldContainer",{
                    name:"YiChuanJiBingTuPian"
                }),

                {
                    fieldLabel: "体检情况",
                    name: "TiJianQingKuang"
                },

                Ext.create("guanli.view.vip.VipAddImagesFieldContainer",{
                    name:"TiJianQingKuangTuPian"
                }),

                {
                    fieldLabel: "其他",
                    colspan: 10,
                    name: "QiTa"
                }
            ]
        },
        {
            title: "会员缴费记录",
            colspan: 10,
            defaults: {
                width: "100%",
            },
            addUrl: "addVipJiaoFeiJiLu",

            getFormData: function () {
                var me = this;
                var grid = me.down('grid');
                var store = grid.store;
                var arr = [];
                for (var i = 0; i < store.getCount(); i++) {
                    arr.push(store.getAt(i).getData())
                }
                var formPanel = me.up("form");
                if (!formPanel.vipId) {
                    Ext.Msg.alert("异常信息", "会员ID不存在");
                    return null;
                }
                ojson['vipId'] = formPanel.vipId;
                return arr;
            },
            layout: "auto",
            items: {
                xtype: "grid",
                colspan: 10,
                plugins: {
                    ptype: 'cellediting',
                    clicksToEdit: 1
                },
                /*tbar:[
                 {text:"增加一行",handler:"onGridAddClick"},
                 {text:"删除一行",handler:"onGridDeleteClick"}
                 ],
                 listeners: {
                 selectionchange: 'onGridSelectionChange'
                 },*/
                store: Ext.create("Ext.data.Store", {
                    fields: ['riqi', 'jiaofeijine', 'beizhu'],
                    data: [
                        {riqi: "2001-01-02", jiaofeijine: "2", beizhu: ""},
                        {riqi: "2001-01-02", jiaofeijine: "2", beizhu: ""},
                        {riqi: "2001-01-02", jiaofeijine: "2", beizhu: ""}
                    ]
                }),
                columns: [
                    {
                        text: '日期', dataIndex: 'riqi',
                        flex: 1,

                        xtype: "datecolumn",
                        format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '缴费金额',
                        dataIndex: 'jiaofeijine',
                        flex: 1,
                        formatter: "usMoney",
                        editor: {
                            xtype: "numberfield"
                        }
                    },
                    {
                        text: '备注', dataIndex: 'beizhu', flex: 1, editor: {
                        xtype: "textareafield"
                    }
                    }
                ]
            }
        },
        {
            title: "赠送保险记录",
            defaults: {
                width: "100%",
                colspan: 3
            },
            addUrl: "addVipZengSongBaoXian",

            getFormData: function () {
                var me = this;
                var items = me.items.items;
                var ojson = {};
                for (var i = 0; i < items.length; i++) {
                    var name = items[i].name;
                    ojson[name] = items[i].getRawValue();
                }
                var formPanel = me.up("form");
                if (!formPanel.vipId) {
                    Ext.Msg.alert("异常信息", "会员ID不存在");
                    return null;
                }
                ojson['vipId'] = formPanel.vipId;
                return ojson;
            },
            items: [
                {fieldLabel: "保险险种"},
                {fieldLabel: "保险单号"},
                {fieldLabel: "生效日期", colspan: 4},
                {fieldLabel: "保险责任", colspan: 6},
                {
                    xtype: "fieldcontainer",
                    fieldLabel: "保险单",
                    colspan: 4,
                    rowspan: 2,
                    items: {
                        xtype: "button",
                        text: "打开保险单"
                    }
                },
                {
                    fieldLabel: "依托公司", xtype: "combo",
                    store: [
                        "泰康人寿保险股份有限公司",
                        "中国人寿保险股份有限公司",
                        "福德生命保险有限公司",
                        "弘晖网",
                        "中国平安保险有限公司",
                        "中国人保财险PICC"
                    ],
                    colspan: 6
                },
            ]
        },
        {
            title: "会员住院记录(病例)",
            layout: "auto",
            addUrl: "addVipZhuYuanJiLu",
            getFormData: function () {
                var me = this;
                var grid = me.down('grid');
                var store = grid.store;
                var arr = [];

                var formPanel = me.up("form");
                if (!formPanel.vipId) {
                    Ext.Msg.alert("异常信息", "会员ID不存在");
                    return null;
                }

                for (var i = 0; i < store.getCount(); i++) {
                    var data = store.getAt(i).getData()

                    data['vipId'] = formPanel.vipId;

                    arr.push(data);

                }

                return arr;
            },
            items: {
                xtype: "grid",
                colspan: 10,
                plugins: {
                    ptype: 'cellediting',
                    clicksToEdit: 1
                },
                store: Ext.create("Ext.data.Store", {
                    fields: ['ruyuanriqi', 'chuyuanriqi', 'huanzhemingcheng', 'yiyuanmingcheng'],
                    data: [
                        {ruyuanriqi: "1", chuyuanriqi: "2", huanzhemingcheng: "3", "yiyuanmingcheng": 4},
                        {ruyuanriqi: "1", chuyuanriqi: "2", huanzhemingcheng: "3", "yiyuanmingcheng": 4},
                        {ruyuanriqi: "1", chuyuanriqi: "2", huanzhemingcheng: "3", "yiyuanmingcheng": 4},
                        {ruyuanriqi: "1", chuyuanriqi: "2", huanzhemingcheng: "3", "yiyuanmingcheng": 4}
                    ]
                }),
                columns: [
                    {
                        text: '入院日期', dataIndex: 'ruyuanriqi', flex: 2,
                        xtype: "datecolumn",
                        format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '出院日期', dataIndex: 'chuyuanriqi', flex: 2,
                        xtype: "datecolumn",
                        format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '诊断证明/长期医嘱', dataIndex: 'huanzhemingcheng', flex: 6, editor: {
                        xtype: "textareafield"
                    }
                    },
                    {
                        text: '医院名称', dataIndex: 'yiyuanmingcheng', flex: 2,
                        editor: {
                            xtype: "textfield"
                        }
                    }
                ]
            }
        },
        {
            title: "会员报销记录",
            colspan: 10,
            addUrl: "addVipBaoXiaoJiLu",

            getFormData: function () {
                var me = this;
                var grid = me.down('grid');
                var store = grid.store;
                var arr = [];
                for (var i = 0; i < store.getCount(); i++) {
                    arr.push(store.getAt(i).getData())
                }
                return arr;
            },
            defaults: {
                width: "100%",
            },

            layout: "auto",
            items: {
                xtype: "grid",
                plugins: {
                    ptype: 'cellediting',
                    clicksToEdit: 1
                },
                store: Ext.create("Ext.data.Store", {
                    fields: ['ruyuanriqi', 'chuyuanriqi', 'huanzhemingcheng', 'yiyuanmingcheng', 'beizhu'],
                    data: [
                        {ruyuanriqi: "1", chuyuanriqi: "2", huanzhemingcheng: "3", "yiyuanmingcheng": 4},
                        {ruyuanriqi: "1", chuyuanriqi: "2", huanzhemingcheng: "3", "yiyuanmingcheng": 4},
                        {ruyuanriqi: "1", chuyuanriqi: "2", huanzhemingcheng: "3", "yiyuanmingcheng": 4},
                        {ruyuanriqi: "1", chuyuanriqi: "2", huanzhemingcheng: "3", "yiyuanmingcheng": 4}
                    ]
                }),
                columns: [
                    {
                        text: '入院日期', dataIndex: 'ruyuanriqi', flex: 1,
                        xtype: "datecolumn",
                        format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '出院日期', dataIndex: 'chuyuanriqi', flex: 1,
                        xtype: "datecolumn",
                        format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '患者名称', dataIndex: 'huanzhemingcheng', flex: 1,
                        editor: {
                            xtype: "textfield"
                        }
                    },
                    {
                        text: '医院名称', dataIndex: 'yiyuanmingcheng', flex: 1,
                        editor: {
                            xtype: "textfield"
                        }
                    },
                    {
                        text: '报销单据', xtype: "widgetcolumn", flex: 1,
                        widget: {
                            text: "详情",
                            xtype: "button"
                        }
                    },
                    {
                        text: "备注", dataIndex: "beizhu", flex: 1,
                        editor: {
                            xtype: "textareafield"
                        }
                    }
                ]
            }
        },
        {
            title: "其他事项",
            addUrl: "addVipQiTaShiXiang",

            getFormData: function () {
                var me = this;
                var items = me.items.items;
                var ojson = {};
                for (var i = 0; i < items.length; i++) {
                    var name = items[i].name;
                    ojson[name] = items[i].getRawValue();
                }
                return ojson;
            },
            defaults: {
                width: "100%",
                colspan: 10
            },
            items: [
                {fieldLabel: "1", name: "QiTaShiXiang1"},
                {fieldLabel: "2", name: "QiTaShiXiang2"},
                {fieldLabel: "3", name: "QiTaShiXiang3"},
                {fieldLabel: "4", name: "QiTaShiXiang4"}
            ]
        }
    ],
})
;
