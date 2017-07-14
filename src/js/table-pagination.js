/**
 * Created by liuxinxin on 2017/5/18.
 */
var Vue = require('vue'),
    yunnexTable = require('./components/yunnex-table/index'),
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
        ],
        titles: [
            {
                name: 'appName',
                text: function(h, params) {
                    return h('i', {
                        'class': 'fa fa-th-large'
                    }, '应用名称');
                },
                width: '14.286%'
            },
            {
                name: 'appPackage',
                text: '应用包名',
                width: '14.286%'
            },
            {
                name: 'appType',
                text: '应用类型',
                width: '14.286%'
            },
            {
                name: 'author',
                text: '所属开发者',
                width: '14.286%'
            },
            {
                name: 'crateTime',
                text: '创建日期',
                width: '14.286%'
            },
            {
                name: 'slogan',
                text: '应用标语',
                width: '14.286%'
            },
            {
                name: 'operate',
                text: '操作',
                width: '14.286%',
                render: function(h, params) {
                    return h('div', {
                        'class': {
                            'yunnex-btn': true
                        },
                        on: {
                            click: function() {
                                self.updateApp();
                            }
                        }
                    }, '更新');
                }
            }
        ],
        tableList: [
            {
                appName: '外卖',
                appPackage: 'yunnex.waimai',
                appType: '掌贝官方应用',
                author: '掌贝',
                crateTime: '2016-03-15',
                slogan: '掌贝外卖让天下没有难送的外卖'
            },
            {
                appName: '智能小二',
                appPackage: 'yunnex.intelligencewaiter',
                appType: '掌贝官方应用',
                author: '掌贝',
                crateTime: '2016-06-12',
                slogan: '掌贝智能小二让顾客光临变得更容易'
            },
            {
                appName: '商户后台',
                appPackage: 'yunnex.saofu',
                appType: '掌贝官方应用',
                author: '掌贝',
                crateTime: '2015-05-12',
                slogan: '掌贝顾客大数据和智能营销平台'
            }
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
        },
        updateApp: function() {
            alert('执行updateApp方法了!');
        }
    },
    components: {
        'yunnex-table': yunnexTable
    }
});