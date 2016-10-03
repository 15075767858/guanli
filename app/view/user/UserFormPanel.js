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
            me.tbar = [
                {
                    text: "提交", handler: function (button) {

                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            method: 'get',
                            url: My.userAddUrl + "addUser",
                            success: function (form, action) {
                                console.log(arguments)
                                Ext.Msg.alert('消息', "增加会员成功。" + action.result.info);
                            },
                            failure: function (form, action) {
                                console.log(arguments)
                                Ext.Msg.alert('消息', "增加失败。" + action.response.responseText);
                            }
                        });
                    }
                }
                }
            ]
        }

        if (me.useType == "update") {
            me.tbar = [
                {
                    text: "提交", handler: function () {

                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            method: 'get',
                            url: My.userUpdateUrl + "updateUser",
                            success: function (form, action) {
                                console.log(arguments)
                                Ext.Msg.alert('消息', "修改完成,有" + action.result.info + "条纪录被改变。");
                            },

                            failure: function (form, action) {
                                console.log(arguments)

                                Ext.Msg.alert('消息', "服务器异常" + action.response.responseText);
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
                    name: "user_Manager",
                    inputValue: 1,
                    uncheckedValue: 0,
                    flex: 1
                }
            ]
        },
        {
            xtype: "fieldset",
            title: "用户信息",
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
                    fieldLabel: '用户信息管理',
                    items: [
                        {name: "addUser", boxLabel: '增加', checked: false},
                        {name: "readUserByItem", boxLabel: '查看', checked: false},
                        {name: "updateUser", boxLabel: '更新', checked: false},
                        {name: "deleteUser", boxLabel: '删除', checked: false}
                    ]
                }
            ]
        },
        {
            xtype: "fieldset",
            title: "权限信息",
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
                        {name: "addVipBaseInfo", boxLabel: '增加', checked: true},
                        {name: "readVipBaseInfo", boxLabel: '查看', checked: true, reference: "readVipBaseInfo"},
                        {name: "updateVipBaseInfo", boxLabel: '更新', checked: true},
                        {
                            name: "readVipBaseInfoByItem", boxLabel: '查看多项', bind: {
                            value: "{readVipBaseInfo.checked}",
                            hidden: true
                        }
                        }
                    ]
                },
                {
                    fieldLabel: '会员体检报告管理',
                    items: [
                        {name: "addVipTiJianBaoGao", boxLabel: '增加', checked: true},
                        {name: "readVipTiJianBaoGao", boxLabel: '查看', checked: true},
                        {name: "updateVipTiJianBaoGao", boxLabel: '更新', checked: true}
                        //{name: "vip_TiJianBaoGao_delete", boxLabel: '删除',hidden:true}
                    ]
                },
                {
                    fieldLabel: '会员缴费记录管理',
                    items: [
                        {name: "addVipJiaoFeiJiLu", boxLabel: '增加', checked: true},
                        {name: "readVipJiaoFeiJiLu", boxLabel: '查看', checked: true},
                        {name: "updateVipJiaoFeiJiLu", boxLabel: '更新', checked: true}
                        //{name: "vip_JiaoFeiJiLu_delete", boxLabel: '删除',hidden:true}
                    ]
                },
                {
                    fieldLabel: '赠送保险纪录管理',
                    items: [
                        {name: "addVipZengSongBaoXian", boxLabel: '增加', checked: true},
                        {name: "readVipZengSongBaoXian", boxLabel: '查看', checked: true},
                        {name: "updateVipZengSongBaoXian", boxLabel: '更新', checked: true}
                        //{name: "vip_ZengSongBaoXian_delete", boxLabel: '删除',hidden:true}
                    ]
                },
                {
                    fieldLabel: '会员住院纪录管理',
                    items: [
                        {name: "addVipZhuYuanJiLu", boxLabel: '增加', checked: true},
                        {name: "readVipZhuYuanJiLu", boxLabel: '查看', checked: true},
                        {name: "updateVipZhuYuanJiLu", boxLabel: '更新', checked: true}
                        //{name: "vip_ZhuYuanJiLu_delete", boxLabel: '删除',hidden:true}
                    ]
                },
                {
                    fieldLabel: '会员报销纪录管理',
                    items: [
                        {name: "addVipBaoXiaoJiLu", boxLabel: '增加', checked: true},
                        {name: "readVipBaoXiaoJiLu", boxLabel: '查看', checked: true},
                        {name: "updateVipBaoXiaoJiLu", boxLabel: '更新', checked: true}
                        //{name: "vip_BaoXiaoJiLu_delete", boxLabel: '删除',hidden:true}
                    ]
                },
                {
                    fieldLabel: '其他事项管理',
                    items: [
                        {name: "addVipQiTaShiXiang", boxLabel: '增加', checked: true},
                        {name: "readVipQiTaShiXiang", boxLabel: '查看', checked: true},
                        {name: "updateVipQiTaShiXiang", boxLabel: '更新', checked: true}
                        //{name: "vip_QiTaShiXiang_delete", boxLabel: '删除',hidden:true}
                    ]
                },
                {
                    fieldLabel: "删除信息",
                    items: [
                        {name: "deleteVipBaseInfo", boxLabel: "删除信息"}
                    ]
                }
            ]
        }
    ]
});


/*


 name:"vip_BaoXianJiLu_create",
 name:"vip_BaoXianJiLu_read",
 name:"vip_BaoXianJiLu_update",
 name:"vip_BaoXianJiLu_delete",
























 */
