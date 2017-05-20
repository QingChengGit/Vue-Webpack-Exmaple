<template>
    <grid :titles="titles" :datas="datas" :is-show-pagination="isShowPagination"
    :page-size="pageSize" :data-count="dataCount" @jump-to-page="jumpToPage"></grid>
</template>

<script>
    var table = require('./yunnex-table');

    module.exports = {
        data: function() {
            return {
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
            };
        },
        components: {
            grid: table
        }
    };
</script>