Ext.define('guanli.view.main.MainTree', {
    extend: 'Ext.tree.Panel',

    requires: [
        'guanli.view.main.MainTreeController',
        'guanli.view.main.MainTreeModel',
        'guanli.view.user.QueryUser'

    ],

    controller: 'main-maintree',
    viewModel: {
        type: 'main-maintree'
    },

    title: "系统菜单",
    width: 300,
    initComponent: function () {
        var me = this;


        var managerItems = [

            {
                text: '会员信息管理', expanded: true, children: [
                {text: '会员查找', widget: "QueryVip", leaf: true},
                {text: '会员增加', widget: "addVipPanel", leaf: true}
            ]
            }
        ];

        if (parseInt(My.loginInfo['user_Manager'])) {
            managerItems.unshift({
                hide: true, text: '用户管理', expanded: true, children: [
                    {text: "用户查找", widget: "QueryUser", leaf: true},
                    {text: "用户增加", widget: "UserFormPanel", leaf: true}
                ]
            })
        }
        me.store = Ext.create('Ext.data.TreeStore', {
            root: {
                text: "首页",
                expanded: true,
                children: managerItems
            }
        })

        me.callParent();
    },

    listeners: {
        itemclick: "itemclick"
    }
});
