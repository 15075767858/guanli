
Ext.define('guanli.view.window.LoginWindow',{
    extend: 'Ext.window.Window',

    requires: [
        'guanli.view.window.LoginWindowController',
        'guanli.view.window.LoginWindowModel'
    ],

    controller: 'window-loginwindow',
    viewModel: {
        type: 'window-loginwindow'
    },
    title:"用户登录",
    modal:true,
    frame: true,
    width: 325,
    autoShow: true,
    items:{
        xtype:"form",
        bodyPadding: 10,
        url: "resources/main.php?par=login",
        method: "POST",
        items: [
            //My.getKeyBordFn(),
            {
                xtype: "textfield",
                allowBlank: false,
                fieldLabel: '账号',
                name: 'username',
                emptyText: '用户名',
                listeners: {
                }
            },
            {
                xtype: "textfield",
                allowBlank: false,
                fieldLabel: '密码',
                name: 'password',
                emptyText: '密码',
                inputType: 'password',
                listeners: {
                }
            },
            {
                xtype: 'checkbox',
                fieldLabel: '记住账号',
                name: 'remember',
            }
        ],
        buttons: [
            {
                text: 'Login', handler: function () {

            }
            }
        ],
        defaults: {
            anchor: '100%',
            labelWidth: 120
        }
    }

});



