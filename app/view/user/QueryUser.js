Ext.define('guanli.view.user.QueryUser', {
    extend: 'Ext.panel.Panel',
    xtype: "QueryUser",
    requires: [
        'guanli.view.user.QueryUserController',
        'guanli.view.user.QueryUserModel'
    ],

    controller: 'user-queryuser',
    viewModel: {
        type: 'user-queryuser'
    },
    width: "100%",
    height: "100%",
    scrollable: "y",

    initComponent: function () {
        var me = this;
        var form = Ext.create("Ext.form.Panel", {
            title: "请输入用户名进行查询",
            defaultType: 'textfield',
            url: My.userAddUrl + "readUserByItem",
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
                                abbr: "username",
                                name: "用户名"
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
                        grid.store.proxy.setUrl(My.userReadUrl + "readUserByItem&name=" + values.name + "&value=" + values.value)
                        grid.store.load();
                    }
                }
            ]
        })

        function resFn(field, res) {
            grid.store.setData(res.result)
        }

        var gridStore = Ext.create("Ext.data.Store", {
            model: "guanli.model.User",
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
                url: "resources/user_read.php?par=readUserByItem&name=username&value=&_dc=1474329240807&limit=10",
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
                {dataIndex: "username", text: "用户名", flex: 1},
                {
                    dataIndex: "CreateDate", text: "创建时间", flex: 2, renderer: function (value) {
                    return new Date(parseInt(value)).toLocaleString()
                }
                },

                {
                    text: "修改", xtype: "widgetcolumn",
                    widget: {
                        text: "修改",
                        xtype: "button",
                        handler: function (button) {
                            var record = this.$widgetRecord;
                            console.log(record)
                            var UserManagerPanel = Ext.getCmp('UserManager')
                            var userFormPanel = UserManagerPanel.add({
                                xtype: "UserFormPanel",
                                title: "修改用户信息",
                                useType: "update"
                            })
                            UserManagerPanel.setActiveTab(userFormPanel)
                            userFormPanel.readUser(record);
                        }
                    }
                },

                {
                    text: "删除", xtype: "widgetcolumn",
                    widget: {
                        xtype: "button",
                        text: "删除",
                        handler: function () {
                            var record = this.$widgetRecord;
                            Ext.Msg.confirm("删除会员", "是否要删除会员" + record.data.username, function (isDel) {
                                console.log(arguments)
                                if (isDel == "no") {
                                    return;
                                }
                                My.AjaxPost(My.userDeleteUrl + "deleteUser", {id: record.id}, function (response) {
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
