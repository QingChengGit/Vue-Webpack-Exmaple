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
            border:1px solid green;
        }
	}
</style>

<template>
	<table class="px-ui-table">
        <caption></caption>
        <tbody>
            <tr class="px-ui-tr" v-for="d in tableData" @click="toggle">
                <td class="px-ui-td" v-text="d.name"></td><td class="px-ui-td" v-text="d.age"></td>
                <td class="delete-btn" v-on:click="removeItem(d, $event)">删除</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
module.exports = {
    props: {
        tableData: Array
    },
    created: function() {
        console.log(this.tableData);
    },
    methods:{
        removeItem:function(item){
            console.log(this.tableData);
            console.log('======');
            console.log(item);
            this.tableData.$remove(item);
        },
        toggle:function(){

        }
    }
}
</script>