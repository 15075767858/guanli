Ext.define('guanli.view.panel.addVip', {
    extend: 'Ext.form.Panel',
    xtype: "addVipPanel",
    requires: [
        'guanli.view.panel.addVipController',
        'guanli.view.panel.addVipModel'
    ],

    title:"会员增加",
    scrollable: true,
    controller: 'panel-addvip',
    /*viewModel: {
     type: 'panel-addvip'
     },*/
    width: "100%",
    height: "100%",
    vipId: 0,
    useType: "create",
    createVipInfo: function () {
        var me = this;
        var formPanel = me;
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


    },

    updateVipInfo: function () {
        var me = this;
        var items = me.items.items;

        for (var i = 0; i < items.length; i++) {
            items[i].updateCommit();
        }

    },
    readVipInfo: function (data) {
        var id = data.id;
        console.log(data)
        console.log(id)
        var me = this;
        var items = me.items.items;

        for (var i = 0; i < items.length; i++) {
            if (i != 0) {

                My.Ajax(My.vipReadUrl + items[i].readUrl, {vipId: id}, function (response) {
                    items[i].loadCommit(Ext.decode(response.responseText))
                })
            } else {
                items[i].loadCommit(data)
            }
        }
    },

    initComponent: function () {
        var me = this;

        me.viewModel = Ext.create('guanli.view.panel.addVipModel')

        //console.log(me.viewModel)

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
                    return ojson;
                }
            },

            addCommit: function (vipId) {
                var me = this;
                var data = me.getFormData();

                if (Ext.isArray(data)) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].hb_vipId = vipId;
                        My.AjaxPostAsync(My.vipAddUrl + me.addUrl, data[i], success)
                    }
                } else {
                    data.hb_vipId = vipId;
                    My.AjaxPostAsync(My.vipAddUrl + me.addUrl, data, success)
                }
                function success(response) {
                    var resJson = Ext.decode(response.responseText)
                    if (resJson.vipId) {

                    } else {
                        Ext.Msg.alert("消息", "存储会员基本信息失败,失败原因: " + resJson['errorInfo']);
                    }
                    if (!resJson.isError) {
                    } else {
                    }

                }

                Ext.Msg.alert("完成", "保存当前会员完成。")
            },

            updateCommit: function () {
                var me = this;
                var data = me.getFormData();
                if (Ext.isArray(data)) {
                    for (var i = 0; i < data.length; i++) {
                        My.Ajax(My.vipUpdateUrl + me.updateUrl, data[i], success)
                    }
                } else {
                    My.Ajax(My.vipUpdateUrl + me.updateUrl, data, success)
                }
                function success(response) {
                    console.log(response.responseText)
                }
            },
            loadCommit: function (data) {
                var me = this;
                var items = me.items.items;
                for (var i = 0; i < items.length; i++) {
                    if (items[i].setValue) {
                        items[i].setValue(data[items[i].name]);
                    }
                }

            },
            listeners:{
                boxready:"fieldsetBoxready"
            }
        }

        if (me.useType == "create") {
            me.tbar = [
                {
                    text: "提交", handler: function (button) {
                    var formPanel = button.up("form");
                    formPanel.createVipInfo()
                }
                }
            ]
        } else if (me.useType == 'update') {
            me.tbar = [
                {
                    text: "修改",
                    handler: function (button) {
                        var formPanel = button.up("form");
                        formPanel.updateVipInfo()
                    }
                }
            ]
        }
        /* me.tbar = [
         {
         text: "提交", handler: function (button) {
         var formPanel = button.up("form");
         formPanel.createVipInfo()
         }
         },
         {
         text: "修改",
         handler: function (button) {
         var formPanel = button.up("form");
         formPanel.updateVipInfo()
         }
         },
         {
         hidden: true,
         text: "提交会员基本信息", handler: function (button) {
         var formPanel = button.up("form");
         var items = formPanel.items.items;
         items[0].addCommit()
         },
         },
         {
         hidden: true,
         text: "修改基本信息", handler: function (button) {
         var formPanel = button.up("form");
         var items = formPanel.items.items;
         items[0].updateCommit()
         }
         }
         ];*/

        me.items = [
            {
                title: "会员基本信息",
                defaults: {
                    width: "100%",
                    colspan: 3
                },
                itemId: "vipBaseInfo",
                addUrl: "addVipBaseInfo",
                readUrl: "readVipBaseInfo",
                updateUrl: "updateVipBaseInfo",
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


                deleteCommit: function () {

                },

                items: [
                    {
                        xtype: "hiddenfield",
                        name: "id",
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
                updateUrl: "updateVipTiJianBaoGao",

                items: [
                    {
                        xtype: "hiddenfield",
                        name: "id",
                    },
                    {
                        xtype: "hiddenfield",
                        name: "vipId",
                    },
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
                updateUrl: "updateVipJiaoFeiJiLu",
                layout: "auto",
                items: {
                    tbar: [
                        {
                            text: "增加一条纪录",
                            handler: function (button) {
                                var grid = button.up("grid");
                                console.log(grid)
                                var model = Ext.create('Ext.data.Model', {
                                    fields: grid.store.config.fields
                                });
                                grid.store.add(model)
                            }
                        }
                    ],
                    xtype: "grid",
                    colspan: 10,
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },
                    setValue: function (value) {
                        var me = this;
                        me.store.setData(value);
                    },
                    store: Ext.create("Ext.data.Store", {
                        fields: ['Date', 'JiaoFeiJinE', 'BeiZhu', "vipId"],
                        data: [
                            /*{Date: "2001-01-02", JiaoFeiJinE: "2", BeiZhu: ""},*/
                        ]
                    }),
                    columns: [
                        {
                            dataIndex: "id", hidden: true
                        },
                        {
                            dataIndex: "vipId", hidden: true
                        },
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
                            formatter: 'number("0.00")',
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
                updateUrl: "updateVipZengSongBaoXian",

                items: [
                    {xtype: "hiddenfield", name: "id"},
                    {xtype: "hiddenfield", name: "vipId"},
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
                updateUrl: "updateVipZhuYuanJiLu",

                items: {
                    xtype: "grid",
                    colspan: 10,
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },
                    setValue: function (value) {
                        var me = this;
                        me.store.setData(value);
                    },
                    tbar: [
                        {
                            text: "增加一条纪录",
                            handler: function (button) {
                                var grid = button.up("grid");
                                console.log(grid)
                                var model = Ext.create('Ext.data.Model', {
                                    fields: grid.store.config.fields
                                });
                                grid.store.add(model)
                            }
                        }
                    ],
                    store: Ext.create("Ext.data.Store", {
                        fields: ['hb_RuYuanDate', 'hb_ChuYuanDate', 'hb_ZhenDuanZhengMing', 'hb_YiYuanMingCheng', 'vipId', 'id'],
                        data: [
                            /*{
                             hb_RuYuanDate: "2011-8-8",
                             hb_ChuYuanDate: "2011-8-8",
                             hb_ZhenDuanZhengMing: "3",
                             "hb_YiYuanMingCheng": 4
                             }*/
                        ]
                    }),
                    columns: [
                        {
                            dataIndex: "id", hidden: true
                        },
                        {
                            dataIndex: "vipId", hidden: true
                        },
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
                updateUrl: "updateVipBaoXiaoJiLu",
                setValue: function (value) {
                    var me = this;
                    me.store.setData(value);
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
                    tbar: [
                        {
                            text: "增加一条纪录",
                            handler: function (button) {
                                var grid = button.up("grid");
                                console.log(grid)
                                var model = Ext.create('Ext.data.Model', {
                                    fields: grid.store.config.fields
                                });
                                grid.store.add(model)
                            }
                        }
                    ],
                    store: Ext.create("Ext.data.Store", {
                        fields: ['hb_RuYuanDate', 'hb_ChuYuanDate', 'hb_HuanZheMingCheng', 'YiYuanMingCheng', 'BeiZhu', 'vipId', 'id'],
                        data: [
                            /*{
                             hb_RuYuanDate: "2011-8-8",
                             hb_ChuYuanDate: "2011-8-8",
                             hb_HuanZheMingCheng: "3",
                             "YiYuanMingCheng": 4,
                             "BeiZhu": "1"
                             }*/
                        ]
                    }),
                    columns: [
                        {
                            dataIndex: "id", hidden: true
                        },
                        {
                            dataIndex: "vipId", hidden: true
                        },
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
                updateUrl: "updateVipQiTaShiXiang",
                defaults: {
                    width: "100%",
                    colspan: 10
                },
                items: [

                    {xtype: "hiddenfield", name: "vipId"},
                    {xtype: "hiddenfield", name: "id"},
                    {fieldLabel: "1", name: "hb_ShiXiang1"},
                    {fieldLabel: "2", name: "hb_ShiXiang2"},
                    {fieldLabel: "3", name: "hb_ShiXiang3"},
                    {fieldLabel: "4", name: "hb_ShiXiang4"}
                ]
            }
        ],
            me.callParent();
    },


});



