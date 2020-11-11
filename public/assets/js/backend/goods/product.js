define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'goods/product/index' + location.search,
                    add_url: 'goods/product/add',
                    edit_url: 'goods/product/edit',
                    del_url: 'goods/product/del',
                    multi_url: 'goods/product/multi',
                    table: 'goods_product',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'name', title: __('Name')},
                        {field: 'pid', title: __('Pid')},
                        {field: 'imgurl', title: __('Imgurl'), formatter: Table.api.formatter.url},
                        {field: 'price', title: __('Price'), operate:'BETWEEN'},
                        {field: 'cid', title: __('Cid')},
                        {field: 'createDate', title: __('Createdate'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'createUser', title: __('Createuser')},
                        {field: 'updateDate', title: __('Updatedate'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'updateUser', title: __('Updateuser')},
                        {field: 'upTime', title: __('Uptime'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'downTime', title: __('Downtime'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});