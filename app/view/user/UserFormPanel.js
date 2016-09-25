Ext.define('guanli.view.user.UserFormPanel', {
    extend: 'Ext.form.Panel',
    xtype: "UserFormPanel",
    requires: [
        'guanli.view.user.UserFormPanelController',
        'guanli.view.user.UserFormPanelModel'
    ],
    title: "新增用户",
    controller: 'user-userformpanel',
    viewModel: {
        type: 'user-userformpanel'
    },
    width: "100%",
    height: "100%",
    defaults: {
        width: "100%",
        layout: {
            type: "table",
            columns: 10,
            tdAttrs: {
                style: 'padding:0 5px 0 15px;'
            }
        },
    },
    useType: "create",
    readUser: function (data) {
        var me = this;
        me.loadRecord(data);
    },
    initComponent: function () {
        var me = this;

        if (me.useType == 'create') {
            me.buttons = [
                {
                    text: "提交", handler: function (button) {

                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            method: 'get',
                            url: My.userAddUrl + "addUser",
                            success: function (form, action) {
                                Ext.Msg.alert('消息', "修改完成。");
                            },
                            failure: function (form, action) {
                                Ext.Msg.alert('消息', "修改完成。");
                            }
                        });
                    }
                }
                }
            ]
        }

        if (me.useType == "update") {
            me.buttons = [
                {
                    text: "提交", handler: function () {

                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            method: 'get',
                            url: My.userUpdateUrl + "updateUser",
                            success: function (form, action) {
                                
                                Ext.Msg.alert('消息', "修改完成。");

                            },

                            failure: function (form, action) {
                                Ext.Msg.alert('消息', "修改完成。");
                            }
                        });
                    }

                }
                }
            ]
        }


        me.callParent();
    },

    items: [
        {
            xtype: "hiddenfield",
            name: "id"
        },
        {
            xtype: "fieldset",
            title: "基本信息",
            layout: "hbox",
            defaults: {
                margin: 20
            },
            items: [
                {
                    xtype: "textfield",
                    fieldLabel: "用户名",
                    name: "username",
                    flex: 3
                }, {
                    xtype: "textfield",
                    inputType: "password",
                    fieldLabel: "密码",
                    name: "password",
                    flex: 3
                }, {
                    xtype: "checkbox",
                    boxLabel: "管理员身份",
                    flex: 1
                }
            ]
        },
        {
            xtype: "fieldset",
            title: "权限信息",
            name: "user_Manager",
            layout: "auto",
            defaultType: 'checkboxgroup',
            defaults: {
                labelWidth: 150,
                width: "100%",
                defaults: {
                    margin: "0 10",
                    inputValue: 1,
                    uncheckedValue: 0,
                }
            },
            items: [
                {
                    fieldLabel: '会员基本信息管理',
                    items: [
                        {name: "vip_baseinfo_create", boxLabel: '增加',},
                        {name: "vip_baseinfo_read", boxLabel: '查看', checked: true},
                        {name: "vip_baseinfo_update", boxLabel: '更新',},
                        {name: "vip_baseinfo_delete", boxLabel: '删除',}
                    ]
                },
                {
                    fieldLabel: '会员体检报告管理',
                    items: [
                        {name: "vip_TiJianBaoGao_create", boxLabel: '增加',},
                        {name: "vip_TiJianBaoGao_read", boxLabel: '查看', checked: true},
                        {name: "vip_TiJianBaoGao_update", boxLabel: '更新',},
                        {name: "vip_TiJianBaoGao_delete", boxLabel: '删除',}
                    ]
                },
                {
                    fieldLabel: '会员缴费记录管理',
                    items: [
                        {name: "vip_JiaoFeiJiLu_create", boxLabel: '增加',},
                        {name: "vip_JiaoFeiJiLu_read", boxLabel: '查看', checked: true},
                        {name: "vip_JiaoFeiJiLu_update", boxLabel: '更新',},
                        {name: "vip_JiaoFeiJiLu_delete", boxLabel: '删除',}
                    ]
                },

                {
                    fieldLabel: '赠送保险纪录管理',
                    items: [
                        {name: "vip_ZengSongBaoXian_create", boxLabel: '增加',},
                        {name: "vip_ZengSongBaoXian_read", boxLabel: '查看', checked: true},
                        {name: "vip_ZengSongBaoXian_update", boxLabel: '更新',},
                        {name: "vip_ZengSongBaoXian_delete", boxLabel: '删除',}
                    ]
                },
                {
                    fieldLabel: '会员住院纪录管理',
                    items: [
                        {name: "vip_ZhuYuanJiLu_create", boxLabel: '增加',},
                        {name: "vip_ZhuYuanJiLu_read", boxLabel: '查看', checked: true},
                        {name: "vip_ZhuYuanJiLu_update", boxLabel: '更新',},
                        {name: "vip_ZhuYuanJiLu_delete", boxLabel: '删除',}
                    ]
                },
                {
                    fieldLabel: '会员报销纪录管理',
                    items: [
                        {name: "vip_BaoXiaoJiLu_create", boxLabel: '增加',},
                        {name: "vip_BaoXiaoJiLu_read", boxLabel: '查看', checked: true},
                        {name: "vip_BaoXiaoJiLu_update", boxLabel: '更新',},
                        {name: "vip_BaoXiaoJiLu_delete", boxLabel: '删除',}
                    ]
                },
                {
                    fieldLabel: '其他事项管理',
                    items: [
                        {name: "vip_QiTaShiXiang_create", boxLabel: '增加',},
                        {name: "vip_QiTaShiXiang_read", boxLabel: '查看', checked: true},
                        {name: "vip_QiTaShiXiang_update", boxLabel: '更新',},
                        {name: "vip_QiTaShiXiang_delete", boxLabel: '删除',}
                    ]
                }
            ]
        },
    ]
});


/*


 name:"vip_BaoXianJiLu_create",
 name:"vip_BaoXianJiLu_read",
 name:"vip_BaoXianJiLu_update",
 name:"vip_BaoXianJiLu_delete",
























 */
