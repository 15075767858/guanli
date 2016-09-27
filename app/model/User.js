/*
Ext.define('guanli.model.User', {
    extend: 'Ext.data.Model',
    xtype: "User",
    fields: [
        {name: "id", type: "number"},
        {name: "username", type: "string"},
        {name: "password", type: "string"},
        {name: "user_Manager", type: "number"},
        {name: "vip_baseinfo_create", type: "number"},
        {name: "vip_baseinfo_read", type: "number"},
        {name: "vip_baseinfo_update", type: "number"},
        {name: "vip_baseinfo_delete", type: "number"},
        {name: "vip_ZhuYuanJiLu_create", type: "number"},
        {name: "vip_ZhuYuanJiLu_read", type: "number"},
        {name: "vip_ZhuYuanJiLu_update", type: "number"},
        {name: "vip_ZhuYuanJiLu_delete", type: "number"},
        {name: "vip_ZengSongBaoXian_create", type: "number"},
        {name: "vip_ZengSongBaoXian_read", type: "number"},
        {name: "vip_ZengSongBaoXian_update", type: "number"},
        {name: "vip_ZengSongBaoXian_delete", type: "number"},
        {name: "vip_TiJianBaoGao_create", type: "number"},
        {name: "vip_TiJianBaoGao_read", type: "number"},
        {name: "vip_TiJianBaoGao_update", type: "number"},
        {name: "vip_TiJianBaoGao_delete", type: "number"},
        {name: "vip_QiTaShiXiang_create", type: "number"},
        {name: "vip_QiTaShiXiang_read", type: "number"},
        {name: "vip_QiTaShiXiang_update", type: "number"},
        {name: "vip_QiTaShiXiang_delete", type: "number"},
        {name: "vip_JiaoFeiJiLu_create", type: "number"},
        {name: "vip_JiaoFeiJiLu_read", type: "number"},
        {name: "vip_JiaoFeiJiLu_update", type: "number"},
        {name: "vip_JiaoFeiJiLu_delete", type: "number"},
        {name: "vip_BaoXianJiLu_create", type: "number"},
        {name: "vip_BaoXianJiLu_read", type: "number"},
        {name: "vip_BaoXianJiLu_update", type: "number"},
        {name: "vip_BaoXianJiLu_delete", type: "number"}
    ]
});

*/


Ext.define('guanli.model.User', {
    extend: 'Ext.data.Model',
    xtype: "User",
    fields: [
        {name: "id", type: "number"},
        {name: "username", type: "string"},
        {name: "password", type: "string"},
        {name: "user_Manager", type: "number"},
        {name: "addVipBaseInfo", type: "number"},
        {name: "addVipTiJianBaoGao", type: "number"},
        {name: "addVipJiaoFeiJiLu", type: "number"},
        {name: "addVipZengSongBaoXian", type: "number"},
        {name: "addVipZhuYuanJiLu", type: "number"},
        {name: "addVipBaoXiaoJiLu", type: "number"},
        {name: "addVipQiTaShiXiang", type: "number"},
        {name: "deleteVipBaseInfo", type: "number"},
        {name: "updateVipBaseInfo", type: "number"},
        {name: "updateVipTiJianBaoGao", type: "number"},
        {name: "updateVipJiaoFeiJiLu", type: "number"},
        {name: "updateVipZengSongBaoXian", type: "number"},
        {name: "updateVipZhuYuanJiLu", type: "number"},
        {name: "updateVipBaoXiaoJiLu", type: "number"},
        {name: "updateVipQiTaShiXiang", type: "number"},
        {name: "readVipBaseInfoByItem", type: "number"},
        {name: "readVipBaseInfo", type: "number"},
        {name: "readVipTiJianBaoGao", type: "number"},
        {name: "readVipJiaoFeiJiLu", type: "number"},
        {name: "readVipZengSongBaoXian", type: "number"},
        {name: "readVipZhuYuanJiLu", type: "number"},
        {name: "readVipBaoXiaoJiLu", type: "number"},
        {name: "readVipQiTaShiXiang", type: "number"},
        {name: "CreateDate", type: "number"}
    ]
});

/*
for (var i = 0; i < a.store.data.items.length; i++) {
    console.log(a.store.data.items[i].data.columnName)
}

*/
