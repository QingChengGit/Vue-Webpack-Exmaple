<style lang="less">
	.px-ui-table{
	    width:600px;
	    margin:10px 0;
		border-collapse:collapse;
		border:2px solid #33acfe;
		-webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
		.px-ui-tr{
            background-color:#f9f9f9;
        }
        .px-ui-td{
            height:40px;
            line-height:40px;
            border:1px solid #fff;
            text-align:center;
        }
        .px-ui-tr-selected{
            background-color: green;
        }
	}
</style>

<template>
	<table class="px-ui-table">
        <caption></caption>
        <tbody>
            <tr class="px-ui-tr" v-for="d in gridData" v-bind:class="{'px-ui-tr-selected': select[$index].selected}"
             @click="toggle(select[$index])">
                <td class="px-ui-td" v-text="d.name"></td><td class="px-ui-td" v-text="d.age"></td>
                <td class="delete-btn" v-on:click="removeItem(d, $event)">删除</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
var merge = require('../util/mergeObject');
module.exports = {
    props: {
        tableData: Array
    },
    data: function() {
        //gridData is for this component modify parent's data
        var gridData = this.tableData.concat(),
            vm = this,
            i,
            o,
            selectArr = [];
        for(i = 0;i < gridData.length;i += 1){
            o = {};
            if(i % 2 === 0){
                o.selected = false;
            }else{
                o.selected = true;
            }
            selectArr.push(o);
        }
        return {
            gridData: gridData,
            select: selectArr
        };
    },
    methods:{
        removeItem: function(item){
            this.gridData.$remove(item);
        },
        toggle: function(d){
            d.selected = !d.selected;
        }
    }
}
</script>