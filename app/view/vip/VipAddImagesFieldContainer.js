Ext.define('guanli.view.vip.VipAddImagesFieldContainer', {
    extend: 'Ext.form.FieldContainer',

    requires: [
        'guanli.view.vip.VipAddImagesFieldContainerController',
        'guanli.view.vip.VipAddImagesFieldContainerModel'
    ],

    controller: 'vip-vipaddimagesfieldcontainer',
    viewModel: {
        type: 'vip-vipaddimagesfieldcontainer'
    },
    initComponent: function () {
        var me = this;
        me.getImages=function(){

        }
        me.items = [
            {
                xtype: "button",
                text: "上传图片", handler: function () {
                var uploadWindow = Ext.create("guanli.view.upload.UploadWindow", {
                    fieuploaded: function (upload, file, response) {
                        console.log(arguments)
                        console.log(file.getSource())
                        console.log(file.getNative())
                        var resJson = Ext.decode(response.response);

                        var img = Ext.create("Ext.Img", {
                            src: "http://www.smartio.cc/style/images/logo.png",
                            margin: "0 0 0 5",
                            //width:50,
                            height: 32,
                            listeners: {
                                el: {
                                    click: function () {

                                        var win = Ext.create("Ext.window.Window", {
                                            title: "iamge",
                                            width: "80%",
                                            height: "80%",
                                            autoShow: true,
                                            constrain: true,
                                            items: {
                                                xtype: "image",
                                                src: img.src,
                                                width: "100%",
                                                height: "100%"
                                            },
                                            rbar: [
                                                {
                                                    text: "删除图片",
                                                    handler: function () {
                                                        me.remove(img);
                                                        win.close();
                                                    }
                                                }
                                            ]
                                        })

                                    }
                                }
                            }
                        })
                        me.insert(1, img);
                    },

                    uploadcomplete: function () {
                        console.log(arguments)
                    }
                })
            }
            }
        ]


        me.callParent();
    }
});
