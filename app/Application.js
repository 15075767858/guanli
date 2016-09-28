/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('guanli.Application', {
    extend: 'Ext.app.Application',


    name: 'guanli',

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {

        Ext.setGlyphFontFamily("fontFamily")



        Ext.create("guanli.view.window.LoginWindow")

        Ext.getBody().setStyle("backgroundImage", "url('resources/images/timg-1.png')")

        // TODO - Launch the application

    },

    onAppUpdate: function () {
        //Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
        //    function (choice) {
        //        if (choice === 'yes') {
        window.location.reload();
        //}
        //}
        //);
    }
});

My = {};
My.mainUrl = 'resources/main.php?par=';
My.vipAddUrl = "resources/vip_create.php?par=";
My.vipReadUrl = "resources/vip_read.php?par=";
My.vipUpdateUrl = "resources/vip_update.php?par=";
My.vipDeleteUrl = "resources/vip_delete.php?par=";
My.userAddUrl = "resources/user_create.php?par=";
My.userDeleteUrl = "resources/user_delete.php?par=";
My.userReadUrl = "resources/user_read.php?par=";
My.userUpdateUrl = "resources/user_update.php?par=";
My.loginUrl = "resources/user_read.php?par=login"
My.loginInfo = null;
My.isDebug = true;
My.mainTab=null;
My.Ajax = function (url, params, success) {
    Ext.Ajax.request({
        url: url,
        method: "GET",
        async: false,
        params: params,
        success: success
    });
}

My.AjaxPost = function (url, params, success) {
    Ext.Ajax.request({
        url: url,
        method: "POST",
        async: false,
        params: params,
        success: success
    });
}
My.AjaxPostAsync = function (url, params, success) {
    Ext.Ajax.request({
        url: url,
        method: "POST",
        async: true,
        params: params,
        success: success
    });
}
My.AjaxJsonP = function (url, params, success) {
    var data = {
        url: url,
        params: params,
        //timeout: 3000,
        success: success,

        failure: success
    }

    Ext.data.JsonP.request(data)

}





