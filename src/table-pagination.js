/**
 * Created by liuxinxin on 2017/5/18.
 */
var Vue = require('vue').default,
    yunnexTable = require('./components/yunnex-table'),
    app;

app = new Vue({
    el: '#app',
    data: {
        activityName: '',
        activityType: '0',
        activityTypes: [
            {text: '全部', value: '0'},
            {text: '生日营销', value: '1'},
            {text: '节日营销', value: '2'}
        ],
        activityStatus: '0',
        activityStatuses: [
            {text: '全部', value: '0'},
            {text: '进行中', value: '1'},
            {text: '启用', value: '2'},
            {text: '暂停', value: '3'},
            {text: '过期', value: '4'}
        ]
    },
    methods: {
        queryData: function() {
            var condition = {
                activityName: this.activityName,
                activityType: this.activityType,
                activityStatus: this.activityStatus
            };
            console.log(condition);
            /*ajax({
             activityName: this.activityName,
             activityType: this.activityType,
             activityStatus: this.activityStatus
             });*/
        }
    },
    render: function(h) {
        return h(yunnexTable, {
            props: {
                titles: {
                    name: '姓名',
                    sex: '性别',
                    age: '年龄',
                    education: '学历',
                    job: '职业'
                },
                datas: [
                    {name: '张三', sex: '男', age: 22, education: '本科', job: '金融规划师'},
                    {name: '王立光', sex: '男', age: 30, education: '本科', job: 'java工程师'},
                    {name: '莫婷', sex: '女', age: 22, education: '研究生', job: '学生'},
                    {name: '李娜', sex: '女', age: 26, education: '本科', job: 'UI设计师'},
                    {name: '李伟', sex: '男', age: 30, education: '大专', job: '销售'}
                ],
                isShowPagination: true,
                pageSize: 8,
                dataCount: 43,
                jumpToPage: function(pageNum) {
                    console.log('pageNum:' + pageNum);
                }
            }
        });
    }
});