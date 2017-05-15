/**
 * Created by qingcheng on 17/05/16.
 */
var Vue = require('vue').default,
    gridComponent = require('./components/grid'),
    customFilter = require('./components/customFilter'),
    navBar = require('./components/navBar'),
    demo,
    filterVue,
    navVue;

/*demo = new Vue({
    el: '.container',
    data: {
        dataArr: [
            {name: 'ws', age: 25},
            {name: '小花', age: 16},
            {name: '柳叶', age: 20}
        ]
    },
    components: {
        'grid-component': gridComponent
    }
});*/
/*filterVue = new Vue({
    el: '.container',
    render: h => h(customFilter)
    /!*
    // 上面的 => 箭头函数等价于
    render: function(h) {
        return h(customFilter);
    }
    *!/
    /!*components: {
        'custom-filter': customFilter
    }*!/
});*/

navVue = new Vue({
    el: '.container',
    data: {
        navList: [
            {id: '001', name: '派券中心', uri: '/tickets', target: '_blank'},
            {id: '002', name: '外卖管理', uri: '/takePackage'},
            {id: '003', name: '微信商城', uri: './wxMall', target: '_self'},
            {id: '004', name: '新客营销', uri: './newMarketing', target: '_self'}
        ],
        isVertical: true
    },
    render: function(handler){
        return handler(navBar);
    }
});

console.log(navVue);