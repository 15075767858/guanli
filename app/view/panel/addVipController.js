Ext.define('guanli.view.panel.addVipController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.panel-addvip',
    onGridAddClick: function (field) {
        var grid = field.up("grid")
        grid.store.insert(0, {});
    },
    onGridDeleteClick: function () {

    },
    onGridSelectionChange: function () {

    },
    fieldsetBoxready: function (fieldset) {
        var me = this.view;
        console.log(fieldset.addUrl + "加载完成");
        var bol;
        if (me.useType == "create") {
            bol = parseInt(My.loginInfo[fieldset.addUrl]);
        } else if (me.useType == 'update') {
            bol = parseInt(My.loginInfo[fieldset.updateUrl]);
        }

        fieldset.setDisabled(!bol)

    }
});
