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

        //Ext.create("guanli.view.window.LoginWindow")
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

My={};
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