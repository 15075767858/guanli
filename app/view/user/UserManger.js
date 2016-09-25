Ext.define('guanli.view.user.UserManger', {
    extend: 'Ext.tab.Panel',
    xtype: "userManager",
    requires: [
        'guanli.view.user.UserMangerController',
        'guanli.view.user.UserMangerModel',
        "guanli.view.user.UserFormPanel",
        "guanli.view.user.QueryUser",
        "guanli.model.User"
    ],
    id: "UserManager",
    controller: 'user-usermanger',
    viewModel: {
        type: 'user-usermanger'
    },
    defaults: {
        closable: true,
    },
    title: "用户管理",
    items: [
        {
            title: "用户列表",
            xtype: "QueryUser"
        },
        {
            xtype: "UserFormPanel"
        },
        /* {
         title: "增加用户",
         xtype: "form",
         defaultType: "textfield",
         items: []
         }*/
    ]
});
