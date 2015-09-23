/**
 * Created by Administrator on 2015/7/24.
 */
var //PXCom = require('../components/dialogComponent'),
    //grid = PXCom.grid,
    //require .vue文件，通过.vue文件的方式封装组件，返回值为options对象
    gridComponent = require('../components/grid.vue'),
    //通过Vue.extend创建组件
    grid = Vue.extend(gridComponent);
    articleService = require('../services/articleService');
var articleVue = new Vue({
    el:'.container',
    data:{
        articles:articleService.fetchData()
    },
    methods:{
        addArticle:function(title,content){
            var articles = this.articles,
                id = parseInt(articles[articles.length-1].id)>8?(parseInt(articles[articles.length-1].id)+1)+"":'0'+(parseInt(articles[articles.length-1].id)+1);
            this.articles.push({id:id,title:title,content:content});
        },
        removeArticle:function(id){
            var articles = this.articles;
            for(var i = 0;i<articles.length;i+=1){
                if(articles[i].id===id){
                    articles.splice(i,1);
                }
            }
        },
        testhandler:function(){
        }
    }
});
var comVue = new Vue({
    el:'.component-wrap',
    data:{
        firstData:{
            tabData:[
            {name:'组件实例数据A',age:'18'},
            {name:'组件实例数据B',age:'22'}
            ]
        },
        secondData:{
            tabData:[
                {name:'组件实例数据C',age:'18'},
                {name:'组件实例数据D',age:'22'}
            ]
        }
    }
});

var myGrid = new grid;
var curData = comVue.firstData.tabData;
console.log(curData);
myGrid.renderTable(comVue.firstData.tabData);
myGrid.$mount('.px-test');
curData.push({name:'组件实例数据E',age:'25'});
myGrid.renderTable(curData);

var myGrid1 = new grid;
var curData1 = comVue.secondData.tabData;
curData1.push({name:'组件实例数据F',age:'30'});
myGrid1.$mount('.component-wrap .px-test');
myGrid1.renderTable(curData1);