Ext.define('guanli.view.window.LoginWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'guanli.view.window.LoginWindowController',
        'guanli.view.window.LoginWindowModel',
        "guanli.model.User"
    ],

    controller: 'window-loginwindow',
    viewModel: {
        type: 'window-loginwindow'
    },
    title: "用户登录",
    //modal: true,
    frame: true,
    closable: false,
    width: 400,
    autoShow: true,

    items: {
        xtype: "form",
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
            },
            {
                xtype: "textfield",
                allowBlank: false,
                fieldLabel: '密码',
                name: 'password',
                emptyText: '密码',
                inputType: 'password',
            },
            {
                xtype: 'checkbox',
                fieldLabel: '记住账号',
                name: 'remember',
            }
        ],

        mysubmit: function () {

            var me = this;
            var form = this;

            form.submit({
                url: My.userReadUrl + "login",
                success: function (form, action) {
                    console.log(action)
                    if (action.result) {
                        me.up("window").loginSuccess(action.result);
                    }
                },
                failure: function (form, action) {
                    Ext.Msg.alert("消息","登录失败"+action.responseText)
                }
            })
        },
        buttons: [
            {
                text: '登录', handler: function (button) {
                button.up('form').mysubmit()
            }
            }
        ],

        defaults: {
            anchor: '100%',
            labelWidth: 120,
            listeners: {
                specialkey: function (field, e) {
                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
                    if (e.getKey() == e.ENTER) {
                        var form = field.up('form').mysubmit()
                    }
                }
            }
        }
    },

    loginSuccess: function (data) {
        var me = this;
        console.log(data)
        if(!data.success){
            return ;
        }
        My.loginInfo = data;

        Ext.create("guanli.view.main.Main", {
            renderTo: Ext.getBody()
        })

        //Ext.Msg.alert("消息", "登录成功,欢迎" + data.username);

        setTimeout(function () {
            me.close();

        }, 500)
    },
    listeners: {
        boxready: function () {

            var me = this;
            My.Ajax(My.loginUrl, {}, function (response) {
                console.log(response);
                if (response.responseText) {
                    var resJson = Ext.decode(response.responseText)
                    me.loginSuccess(resJson);
                }
            })

        }

    }
});



