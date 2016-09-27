/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('guanli.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        "Ext.window.Window",
        'guanli.view.main.MainController',
        'guanli.view.main.MainModel',
        'guanli.view.main.List',
        'guanli.view.tab.VipInfo',
        "guanli.view.user.UserManger",
        "guanli.view.upload.UploadWindow"
    ],

    controller: 'main',
    viewModel: 'main',



    initComponent: function () {
        var me = this;

        me.tbar = [
            {
                text: "欢迎 " + My.loginInfo.username,
                menu: [
                    {
                        text: "退出登录", handler: function () {
                        My.Ajax(My.userReadUrl + "outLogin", {}, function () {
                            location.reload()
                        })
                    }
                    }
                ]
            }
        ]

        me.items = [


            {
                title: 'Home',
                iconCls: 'fa-home',
                // The following grid shares a store with the classic version's grid as well!
                html:"惠邦资讯管理系统",

                height:Ext.getBody().height,
                width:"100%"

            },
            {
                xtype: "userManager",
                iconCls: "fa-users",
                hidden:!parseInt(My.loginInfo['user_Manager']),
                /*listeners: {
                    boxready: function (userPanel) {
                        return ;
                        var userManager = My.loginInfo['user_Manager']
                        console.log(userManager)
                        if(userManager){
                            userPanel.hide()
                        }else{
                            userPanel.show()
                        }
                    }
                }*/
            },
            {
                xtype: "vipInfoTab",
                iconCls: "fa-user"
            },


             {
                title: 'Users',
                iconCls: 'fa-user',
                hidden: true,
                bind: {
                    html: '{loremIpsum}'
                }
            }, {
                title: 'Groups',
                iconCls: 'fa-users',
                hidden: true,
                bind: {
                    html: '{loremIpsum}'
                }
            }, {
                title: 'Settings',
                hidden: true,
                iconCls: 'fa-cog',
                bind: {
                    html: '{loremIpsum}'
                }
            }];
        me.callParent();
    },

    /*
     tabBarHeaderPosition: 1,
     titleRotation: 0,
     tabRotation: 0,
     ui: 'navigation',

     header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },*/


});
