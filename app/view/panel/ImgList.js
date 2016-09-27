Ext.define('guanli.view.panel.ImgList', {
    extend: 'Ext.panel.Panel',

    xtype: "imglist",
    requires: [
        'guanli.view.panel.ImgListController',
        'guanli.view.panel.ImgListModel'
    ],
    bodyStyle: {
        background: "transparent"
    },
    margin: "0 0 5 0",
    controller: 'panel-imglist',
    viewModel: {
        type: 'panel-imglist'
    },
    initComponent: function () {
        var me = this;
        me.getRawValue = me.getRawValue || function () {
                var images = me.query("image");
                var srcStr = "";
                for (var i = 0; i < images.length; i++) {
                    srcStr += images[i].src + ","
                }
                return srcStr.substr(0, srcStr.length - 1) || ""
            }
        me.setValue = function (value) {
            if (!value) {
                return;
            }
            var arr = value.split(",");
            for (var i = 0; i < arr.length; i++) {
                var img = me.createImg(arr[i])
                me.insert(1, img);
            }
        }
        me.items = [
            {
                xtype: "button",
                text: "上传图片", handler: function () {
                var uploadWindow = Ext.create("guanli.view.upload.UploadWindow", {
                    url: "resources/img_upload.php?par=upload",
                    fieuploaded: function (upload, file, response) {
                        console.log(arguments)
                        var img = me.createImg("resources/" + response.response)
                        me.insert(1, img);

                    },
                    uploadcomplete: function () {
                        console.log(arguments)
                    }
                })
            }
            }
        ]


        me.createImg = function (src) {
            console.log(src)
            var me = this;
            var img = Ext.create("Ext.Img", {
                src: src || "http://www.smartio.cc/style/images/logo.png",
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
                                            console.log(img)

                                            /*var filename = img.src.substr(img.src.indexOf("/") + 1, img.src.length)
                                            My.Ajax("resources/img_upload.php?par=delete", {filename: filename}, function () {
                                            })*/

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
            return img;
        }


        me.callParent();
    }
});
