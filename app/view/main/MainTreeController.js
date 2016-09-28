Ext.define('guanli.view.main.MainTreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-maintree',
    itemclick: function (tree, record, item, index, e, eOpts) {
        if (record.data.widget) {
            var component = Ext.widget(record.data.widget)
            My.mainTab.add(component)
            My.mainTab.setActiveItem(component)

        }

    }
});
