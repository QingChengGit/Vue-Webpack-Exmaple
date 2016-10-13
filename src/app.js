/**
 * Created by qingcheng on 16/10/14.
 */
var gridComponent = require('./components/grid.'),
    demo;

//register gridComponent
Vue.component('q-grid', gridComponent);

demo = new Vue({
    el: '.container',
    data: {
        dataArr: [
            {name: 'QingCheng', age: 25},
            {name: '小花', age: 16},
            {name: '柳叶', age: 20}
        ]
    }
});