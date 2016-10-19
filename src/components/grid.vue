<style lang="less">
    .px-table-component {
        width: 600px;
        .table-operate-area {
            margin: 20px 0;
        }
        .search-input {
            width: 200px;
            height: 40px;
            outline: none;
        }
        .add-btn {
            display: inline-block;
            width: 80px;
            height: 40px;
            line-height: 40px;
            margin-left: 15px;
            color: #fff;
            background-color: #4592d7;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
        }
    }
	.px-ui-table {
	    width: 100%;
	    margin: 10px 0;
		border-collapse: collapse;
		border: 2px solid #33acfe;
		-webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
		.px-ui-tr{
            background-color: #f9f9f9;
        }
        .px-ui-td{
            height: 40px;
            line-height: 40px;
            border: 1px solid #fff;
            text-align: center;
        }
        .px-ui-tr-selected{
            background-color: green;
        }
        .select {
            color: red;
        }
        .delete-btn {
            color: dodgerblue;
        }
	}
</style>

<template>
    <div class="px-table-component">
        <div class="table-operate-area">
            <input type="text" class="search-input"/>
            <div class="add-btn" @click="addItem()">添加</div>
        </div>
        <table class="px-ui-table">
            <caption></caption>
            <tbody>
                <tr class="px-ui-tr" v-for="d in gridData"
                v-bind:class="{'px-ui-tr-selected': select[$index].selected}"
                v-toggle-select @click="selectItem(d)">
                    <td class="px-ui-td" v-text="d.name"></td><td class="px-ui-td" v-text="d.age"></td>
                    <td class="px-ui-td delete-btn" v-on:click="removeItem(d, $event)">删除</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
var merge = require('../util/mergeObject');

function toggleSelect(evt) {
    var target = evt.currentTarget,
        className = target.className,
        reg = /(^|\s*)select(\s+|$)/;

        if(!reg.test(className)){
            className += ' select';
        }else{
            className = className.replace(reg, '');
        }
    target.className = className;
}

module.exports = {
    props: {
        tableData: Array
    },
    data: function() {
        //gridData is for this component modify parent's data
        var gridData = this.tableData.concat();
        return {
            gridData: gridData
        };
    },
    computed: {
        select: function() {
            //给表格相邻的行添加不同的样式,当gridData更新时会自动触发此函数
            var i,
                o,
                selectArr = [];

            for(i = 0;i < this.gridData.length;i += 1){
                o = {};
                if(i % 2 === 0){
                    o.selected = false;
                }else{
                    o.selected = true;
                }
                selectArr.push(o);
            }
            return selectArr;
        }
    },
    methods:{
        removeItem: function(item){
            this.gridData.$remove(item);
        },
        selectItem: function(item){
            //向父组件提供接口
            this.$dispatch('get-selected-data', item);
        },
        addItem: function() {
            this.gridData.push({
                name: 'qc',
                age: 25
            });
        },

    },
    directives: {
        //自定义指定directive
        'toggle-select': {
            bind: function() {
                this.el.addEventListener('click', toggleSelect, false);
            },
            unbind: function() {
                this.el.removeEventListener('click', toggleSelect, false);
            }
        }
    }
}
</script>