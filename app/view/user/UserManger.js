
Ext.define('guanli.view.user.UserManger',{
    extend: 'Ext.tab.Panel',
    xtype:"userManager",
    requires: [
        'guanli.view.user.UserMangerController',
        'guanli.view.user.UserMangerModel'
    ],

    controller: 'user-usermanger',
    viewModel: {
        type: 'user-usermanger'
    },
    title:"用户管理",
    items:[
        {
            title:"增加用户",
            xtype:"form",
            defaultType: "textfield",
            items:[

            ]
        },{
            title:"用户列表"
        }
    ]
});
