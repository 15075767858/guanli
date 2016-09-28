/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('guanli.view.main.Main', {
    extend: 'Ext.panel.Panel',
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
        "guanli.view.upload.UploadWindow",
        'guanli.view.main.MainTree'
    ],

    controller: 'main',
    viewModel: 'main',

    title: "惠邦资讯管理系统",
    icon: "resources/images/logo1.png",
    iconCls: "logoMain",
    layout: "border",
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },
    ui: "mainpanel",
    height: window.screen.availHeight - 100,
    initComponent: function () {
        var me = this;

        me.items = [
            {
                region: "north",
                layout: "hbox",
                defaults: {
                    border: 0
                },
                items: [
                    {
                        bodyStyle: {
                            lineHeight: "30px"
                        },
                        flex: 5,
                        listeners: {
                            boxready: function (button) {
                                setInterval(function () {
                                    button.setHtml("欢迎 " + My.loginInfo.username + " 登录,现在时间是  " + new Date().toLocaleString())
                                }, 1000)
                            }
                        }
                    },
                    {
                        flex: 7
                    },
                    {
                        flex: 1,
                        xtype: "button",
                        //text: "欢迎 " + My.loginInfo.username,
                        text: "退出登录",
                        handler: function () {
                            My.Ajax(My.userReadUrl + "outLogin", {}, function () {
                                location.reload()
                            })
                        }
                    }
                ]
            },

            Ext.create("guanli.view.main.MainTree", {
                region: "west",
            }),

            My.mainTab = Ext.create("Ext.tab.Panel", {
                region: "center",
                xtype: "tab",
                defaults: {
                    closable: true
                },
                items: [
                    {
                        closable: false,
                        title: 'Home',
                        //iconCls: 'fa-home',
                        html: "惠邦资讯管理系统",
                        height: "100%",
                        width: "100%"
                    },
                    {
                        hidden: true,
                        xtype: "userManager",

                        //hidden: !parseInt(My.loginInfo['user_Manager'])
                    },
                    {
                        hidden: true,
                        xtype: "vipInfoTab",
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
                    }
                ]
            })
        ];
        me.callParent();
    },
    //ui: 'navigation',

    /*
     tabBarHeaderPosition: 1,
     titleRotation: 0,
     tabRotation: 0,

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
