/**
 * Created by Administrator on 2015/7/24.
 */
var articleService = (function(){
    function fetchData(){
        var data = [
            {
                id:'01',
                title:'AngularJS',
                content:'Angular 是一个NB的框架!'
            },
            {
                id:'02',
                title:'VueJS',
                content:'VueJS 是一个轻量级的面向组件开发的灵活框架!'
            },
            {
                id:'03',
                title:'jQuery',
                content:'jQuery 是一个极大的简化了开发人员对DOM操作并处理了复杂的框浏览器兼容性的高效的JS库!'
            }
        ];
        return data;
    }
    return {
        fetchData:fetchData
    };
}());
module.exports = articleService;