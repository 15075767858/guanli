Ext.define('guanli.view.panel.addVip', {
    extend: 'Ext.form.Panel',
    xtype: "addVipPanel",
    requires: [
        'guanli.view.panel.addVipController',
        'guanli.view.panel.addVipModel'
    ],

    scrollable: true,
    controller: 'panel-addvip',
    /*viewModel: {
     type: 'panel-addvip'
     },*/
    width: "100%",
    height: "100%",
    title: "增加会员",
    vipId: 0,
    tbar: [
        {
            text: "提交", handler: function (button) {
            var formPanel = button.up("form")

            var baseInfo = formPanel.getComponent("vipBaseInfo");
            var vipId = baseInfo.addCommit();
            formPanel.viewModel.set('vipId', vipId);
            var items = formPanel.items.items;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id == baseInfo.id) {
                    continue
                }
                if (items[i].addCommit) {

                    items[i].addCommit(vipId);
                }
            }
        }
        },
        {
            text: "提交会员基本信息", handler: function (button) {
            var formPanel = button.up("form");

            var items = formPanel.items.items;

            items[0].addCommit()
        }
        }
    ],
    readVipInfo: function (data) {
        var id = data.id;
        console.log(data)
        var me = this;
        var items = me.items.items;

        for (var i = 0; i < items.length; i++) {
            if(i!=0){
            My.Ajax(My.vipReadUrl + items[i].readUrl, {vipId: id}, function (response) {
                items[i].loadFormData(Ext.decode(response.responseText))
            })
            }else{
                items[i].loadFormData(data)
            }
        }

    },
    initComponent: function () {
        var me = this;
        me.viewModel = Ext.create('guanli.view.panel.addVipModel')

        console.log(me.viewModel)
        me.defaults = {
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

            getVipId: function (title) {
                console.log(me.vipId)
                me.lookupViewModel().get('vipId')
                return me.vipId;
            },

            getFormData: function () {
                var me = this;
                var grid = me.down('grid');
                //var vipId = me.getVipId(me.title);

                if (grid) {
                    var store = grid.store;
                    var arr = [];
                    for (var i = 0; i < store.getCount(); i++) {
                        var data = store.getAt(i).getData();
                        //data.vipId = vipId;
                        arr.push(data);
                    }
                    return arr;
                } else {
                    var items = me.items.items;
                    var ojson = {};
                    for (var i = 0; i < items.length; i++) {
                        if (!items[i].disabled) {
                            var name = items[i].name;
                            ojson[name] = items[i].getRawValue();
                        }
                    }
                    //ojson['vipId'] = vipId;
                    return ojson;
                }
            },

            setFormData: function (data) {
                var me = this;
                me.formData = data;

            },
            loadFormData: function (vipId) {
                var data = null;
                My.Ajax(My.vipReadUrl + me.readUrl, {vipId: vipId}, function (response) {

                    data = Ext.decode(response.responseText)
                    console.log(data)

                })
                return data;
            },
            addCommit: function (vipId) {
                var me = this;
                var data = me.getFormData();
                if (Ext.isArray(data)) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].hb_vipId = vipId;
                        My.AjaxPost(My.vipAddUrl + me.addUrl, data[i], success)
                    }
                } else {
                    data.hb_vipId = vipId;
                    My.AjaxPost(My.vipAddUrl + me.addUrl, data, success)
                }
                function success(response) {
                    var resJson = Ext.decode(response.responseText)
                    if (resJson.vipId) {
                    } else {
                        Ext.Msg.alert("消息", "存储会员基本信息失败,失败原因" + resJson['errorInfo']);
                    }
                    if (!resJson.isError) {
                    } else {
                    }

                }
            }

        }
        me.callParent();
    },

    items: [
        {
            title: "会员基本信息",
            defaults: {
                width: "100%",
                colspan: 3,
                value: "阿斯顿发"
            },
            itemId: "vipBaseInfo",
            addUrl: "addVipBaseInfo",
            readUrl: "readVipBaseInfo",
            setVipId: function (id) {
                var me = this;
                var viewModel = me.lookupViewModel()
                console.log(viewModel)
                viewModel.set("vipId", id)
                var form = me.up("form");
                form.vipId = id;
            },
            addCommit: function () {
                var me = this;
                var vipId = 0;
                var data = me.getFormData();
                My.Ajax(My.vipAddUrl + me.addUrl, data, function (response) {
                    var resJson = Ext.decode(response.responseText)
                    vipId = resJson.vipId;
                })
                return vipId;
            },

            loadCommit: function (id) {
                var vipId = id;
                My.Ajax(My.vipReadUrl + me.readUrl, {vipId: vipId}, function () {

                })

            },
            updateCommit: function () {

            },
            deleteCommit: function () {

            },

            items: [
                {
                    xtype: "hiddenfield",
                    name: "hb_id",
                    /*bind:{
                     value:"{vipId}"
                     }*/
                },
                {
                    xtype: "hiddenfield",
                    value: new Date().getTime(),
                    name: "CreateDate"
                },
                {
                    fieldLabel: "会员卡编号",
                    name: "hb_vipCardNumber",
                    colspan: 10
                }, {
                    fieldLabel: "  姓名",
                    name: "hb_vipName"
                }, {
                    fieldLabel: "  性别",
                    name: "hb_vipSex",
                    xtype: "combo",
                    store: ['男', "女"]
                }, {
                    fieldLabel: "出生日期",
                    name: "hb_vipBirthDate",
                    format: 'Y-m-d',
                    xtype: "datefield",
                    colspan: 4
                }, {
                    fieldLabel: "身份证号",
                    name: "hb_vipIdNumber"
                }, {
                    fieldLabel: "籍贯",
                    name: "hb_vipJiGuan"
                }, {
                    fieldLabel: "职业",
                    name: "hb_vipJob",
                    colspan: 4
                }, {
                    fieldLabel: "现住地址",
                    name: "hb_vipCurAddress"
                },
                {
                    fieldLabel: "座机:",
                    name: "hb_vipTelePhone"
                }, {
                    fieldLabel: "手机",
                    name: "hb_vipMobelPhone",
                    colspan: 4
                },
                {
                    fieldLabel: "紧急联系人",
                    name: "hb_jinjilianxiren"
                },
                {
                    fieldLabel: "座机:",
                    name: "hb_jjlxrTelePhone"
                }, {
                    fieldLabel: "手机",
                    name: "hb_jjlxrMobelPhone",
                    colspan: 4
                }, {
                    fieldLabel: "医保卡编号",
                    name: "hb_yibaokaId",
                    colspan: 5
                }, {
                    fieldLabel: "农合本编号",
                    name: "hb_nonghebenId",
                    colspan: 5
                }

            ]
        },
        {
            title: "会员体检报告",
            defaults: {
                colspan: 10,
                width: "100%"
            },

            addUrl: "addVipTiJianBaoGao",
            readUrl: "readVipTiJianBaoGao",

            items: [

                {
                    fieldLabel: "慢性病",
                    name: "hb_ManXingBing"
                },
                {
                    xtype: "imglist",
                    name: "hb_ManXingBingTuPian"
                },
                {
                    fieldLabel: "重大疾病",
                    name: "hb_ZhongDaJiBing"
                },
                {
                    xtype: "imglist",
                    name: "hb_ZhongDaJiBingTuPian"
                },
                {
                    fieldLabel: "遗传疾病",
                    name: "hb_YiChuanJiBing"
                },
                {
                    xtype: "imglist",
                    name: "hb_YiChuanJiBingTuPian"
                },
                {
                    fieldLabel: "体检情况",
                    name: "hb_TiJianQingKuang"
                },
                {
                    xtype: "imglist",
                    name: "hb_TiJianQingKuangTuPian"
                },
                {
                    fieldLabel: "其他",
                    colspan: 10,
                    name: "hb_QiTa"
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
            readUrl: "readVipJiaoFeiJiLu",


            layout: "auto",

            items: {
                xtype: "grid",
                colspan: 10,
                plugins: {
                    ptype: 'cellediting',
                    clicksToEdit: 1
                },

                store: Ext.create("Ext.data.Store", {
                    fields: ['Date', 'JiaoFeiJinE', 'BeiZhu'],
                    data: [
                        {Date: "2001-01-02", JiaoFeiJinE: "2", BeiZhu: ""},
                        {Date: "2001-01-02", JiaoFeiJinE: "2", BeiZhu: ""},
                        {Date: "2001-01-02", JiaoFeiJinE: "2", BeiZhu: ""}
                    ]
                }),
                columns: [
                    {
                        text: '日期', dataIndex: 'Date',
                        flex: 1,

                        xtype: "datecolumn",
                        format: 'Y-m-d',
                        //format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '缴费金额',
                        dataIndex: 'JiaoFeiJinE',
                        flex: 1,
                        formatter: "usMoney",
                        editor: {
                            xtype: "numberfield"
                        }
                    },
                    {
                        text: '备注', dataIndex: 'BeiZhu', flex: 1, editor: {
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
            readUrl: "readVipZengSongBaoXian",

            items: [
                {fieldLabel: "保险险种", name: "hb_BaoXianXianZhong"},
                {fieldLabel: "保险单号", name: "hb_BaoXianId"},
                {
                    fieldLabel: "生效日期", colspan: 4, name: "hb_ShengXiaoDate", format: 'Y-m-d',
                    xtype: "datefield",
                },
                {fieldLabel: "保险责任", colspan: 6, name: "hb_BaoXianZeRen"},
                {
                    xtype: "fieldcontainer",
                    disabled: true,
                    fieldLabel: "保险单",
                    colspan: 4,
                    rowspan: 2,
                    items: {
                        xtype: "button",
                        text: "打开保险单"
                    }
                    , name: "hb_YiTuoGongSi"
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
                    ,
                    name: "hb_YiTuoGongSi"
                },
            ]
        },
        {
            title: "会员住院记录(病例)",
            layout: "auto",
            addUrl: "addVipZhuYuanJiLu",
            readUrl: "readVipZhuYuanJiLu",


            items: {
                xtype: "grid",
                colspan: 10,
                plugins: {
                    ptype: 'cellediting',
                    clicksToEdit: 1
                },
                store: Ext.create("Ext.data.Store", {

                    fields: ['hb_RuYuanDate', 'hb_ChuYuanDate', 'hb_ZhenDuanZhengMing', 'hb_YiYuanMingCheng'],
                    data: [
                        {
                            hb_RuYuanDate: "2011-8-8",
                            hb_ChuYuanDate: "2011-8-8",
                            hb_ZhenDuanZhengMing: "3",
                            "hb_YiYuanMingCheng": 4
                        },
                        {
                            hb_RuYuanDate: "2011-8-8",
                            hb_ChuYuanDate: "2011-8-8",
                            hb_ZhenDuanZhengMing: "3",
                            "hb_YiYuanMingCheng": 4
                        },
                        {
                            hb_RuYuanDate: "2011-8-8",
                            hb_ChuYuanDate: "2011-8-8",
                            hb_ZhenDuanZhengMing: "3",
                            "hb_YiYuanMingCheng": 4
                        },
                        {
                            hb_RuYuanDate: "2011-8-8",
                            hb_ChuYuanDate: "2011-8-8",
                            hb_ZhenDuanZhengMing: "3",
                            "hb_YiYuanMingCheng": 4
                        }
                    ]
                }),
                columns: [
                    {
                        text: '入院日期', dataIndex: 'hb_RuYuanDate', flex: 2,
                        xtype: "datecolumn",
                        format: 'Y-m-d',
                        //format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '出院日期', dataIndex: 'hb_ChuYuanDate', flex: 2,
                        xtype: "datecolumn",
                        format: 'Y-m-d',
                        //format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '诊断证明/长期医嘱', dataIndex: 'hb_ZhenDuanZhengMing', flex: 6, editor: {
                        xtype: "textareafield"
                    }
                    },
                    {
                        text: '医院名称', dataIndex: 'hb_YiYuanMingCheng', flex: 2,
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
            readUrl: "readVipBaoXiaoJiLu",

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
                    fields: ['hb_RuYuanDate', 'hb_ChuYuanDate', 'hb_HuanZheMingCheng', 'YiYuanMingCheng', 'BeiZhu'],
                    data: [
                        {
                            hb_RuYuanDate: "2011-8-8",
                            hb_ChuYuanDate: "2011-8-8",
                            hb_HuanZheMingCheng: "3",
                            "YiYuanMingCheng": 4,
                            "BeiZhu": "1"
                        },
                        {
                            hb_RuYuanDate: "2011-8-8",
                            hb_ChuYuanDate: "2011-8-8",
                            hb_HuanZheMingCheng: "3",
                            "YiYuanMingCheng": 4,
                            "BeiZhu": "1"
                        },
                        {
                            hb_RuYuanDate: "2011-8-8",
                            hb_ChuYuanDate: "2011-8-8",
                            hb_HuanZheMingCheng: "3",
                            "YiYuanMingCheng": 4,
                            "BeiZhu": "1"
                        },
                        {
                            hb_RuYuanDate: "2011-8-8",
                            hb_ChuYuanDate: "2011-8-8",
                            hb_HuanZheMingCheng: "3",
                            "YiYuanMingCheng": 4,
                            "BeiZhu": "1"
                        }
                    ]
                }),
                columns: [
                    {
                        text: '入院日期', dataIndex: 'hb_RuYuanDate', flex: 1,
                        xtype: "datecolumn",
                        format: 'Y-m-d',
                        //format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '出院日期', dataIndex: 'hb_ChuYuanDate', flex: 1,
                        xtype: "datecolumn",
                        format: 'Y-m-d',
                        //format: "Y年m月d日",
                        editor: {
                            xtype: 'datefield',
                            format: 'Y-m-d'
                        }
                    },
                    {
                        text: '患者名称', dataIndex: 'hb_HuanZheMingCheng', flex: 1,
                        editor: {
                            xtype: "textfield"
                        }
                    },
                    {
                        text: '医院名称', dataIndex: 'YiYuanMingCheng', flex: 1,
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
                        text: "备注", dataIndex: "BeiZhu", flex: 1,
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
            readUrl: "readVipQiTaShiXiang",
            defaults: {
                width: "100%",
                colspan: 10
            },
            items: [
                {fieldLabel: "1", name: "hb_ShiXiang1"},
                {fieldLabel: "2", name: "hb_ShiXiang2"},
                {fieldLabel: "3", name: "hb_ShiXiang3"},
                {fieldLabel: "4", name: "hb_ShiXiang4"}
            ]
        }
    ],
});



