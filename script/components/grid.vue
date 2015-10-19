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
        .px-ui-tr:hover{
            border:1px solid green;
        }
	}
</style>

<template>
	<table class="px-ui-table">
		<caption></caption>
		<tbody>
			<tr class="px-ui-tr" v-repeat="compData" v-on="click:toggle(this.$el)">
				<td class="px-ui-td" v-text="name"></td><td class="px-ui-td" v-text="age"></td>
			</tr>
		</tbody>
	</table>
</template>

<script>
module.exports = {
		data:function(){
            return {
                compData:[{name:'组件实例数据C',age:'18'},
                    {name:'组件实例数据D',age:'22'}]
            };
        },
        methods:{
            renderTable:function(data){
                this.$data.compData = data;
            },
            toggle:function(item){
                var flag = item.getAttribute('selected');
                if(!flag){
                    item.style.backgroundColor = "green";
                    item.setAttribute('selected',1);
                }else{
                    item.style.backgroundColor = "";
                    item.removeAttribute('selected');
                }
            }
        }
	};
</script>