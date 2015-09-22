/**
 * Created by Administrator on 2015/7/30.
 */
var PXComponents = (function(){
    /*Vue.component('px-dialog',{
        template:'<div class="dialog-alert">Vue Components</div><div class="dialog-mask"></div>',
        /!*replace:true,
        data:{
            title:'确定'
        }*!/
    });*/
    var dialog = Vue.extend({
        template:'<div class="dialog-alert">vue components</div><div class="dialog-mask"></div>',
        replace:true,
        data:function(){
            return {
                title:'确定'
            }
        },
        methods:{
            open:function(){

            },
            close:function(){

            }
        }
    });
    /*var grid = Vue.extend({
        props:['compEl', 'compData'],
        template:'<table class="px-ui-table"><caption></caption><tbody><tr class="px-ui-tr" v-repeat="compData.tabData" v-on="click:toggle(this.$el)">' +
        '<td class="px-ui-td" v-text="name"></td><td class="px-ui-td" v-text="age"></td></tr></tbody></table>',
        ready: function () {
           console.log(typeof this.compData);
        },
        methods:{
            renderTable:function(){
                console.log(this);
            },
            showTable:function(){

            },
            destory:function(){

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
    });*/
    var grid = Vue.extend({
        template:'<table class="px-ui-table"><caption></caption><tbody><tr class="px-ui-tr" v-repeat="compData" v-on="click:toggle(this.$el)">' +
        '<td class="px-ui-td" v-text="name"></td><td class="px-ui-td" v-text="age"></td></tr></tbody></table>',
        data:function(){
            return {
                compData:[{name:'组件实例数据C',age:'18'},
                    {name:'组件实例数据D',age:'22'}]
            };
        },
        /*el:function(){
            return '.px-table';
        },*/
        methods:{
            renderTable:function(data){
                this.$data.compData = data;
            },
            showTable:function(){

            },
            destory:function(){

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
    });
    /*Vue.component('grid',{
        props:['compEl', 'compData'],
        replace:true,
        template:'<table class="px-ui-table"><caption></caption><tbody><tr class="px-ui-tr" v-repeat="compData.tabData">' +
        '<td class="px-ui-td" v-text="name"></td><td class="px-ui-td" v-text="age"></td></tr></tbody></table>'
    });*/
    //如果想在Html中直接使用组件则需向Vue注册dialog组件,确保在根Vue实例初始化之前注册组件，否则不会起作用
    Vue.component('px-dialog',dialog);
    Vue.component('px-grid',grid);

    /*===========custom directive===============*/
    Vue.directive('my-directive',{
        deep:true,
        bind:function(){
            this.el.innerText = '我是directive创建的文本';
            this.el.style.backgroundColor = 'green';
        },
        update:function(obj){
            console.log(obj);
        }
    });
    return {
        dialog:dialog,
        grid:grid
    };
}());
module.exports = PXComponents;