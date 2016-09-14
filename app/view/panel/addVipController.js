Ext.define('guanli.view.panel.addVipController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.panel-addvip',
    onGridAddClick:function(field){
        var grid  = field.up("grid")
        grid.store.insert(0,{});
    },
    onGridDeleteClick:function(){

    },
    onGridSelectionChange:function(){

    }
    
});
