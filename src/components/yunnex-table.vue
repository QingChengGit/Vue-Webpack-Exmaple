<template>
    <div class="simple-table-component">
        <table class="yunnex-table">
            <thead class="yunnex-table-thead">
            <tr>
                <th v-for="title in titles">
                    {{title}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr class="yunnex-table-tr" v-for="item in datas">
                <td v-for="(val, key) in titles">
                    {{item[key]}}
                </td>
            </tr>
            </tbody>
        </table>
        <pagination :page-size="pageSize" :current-page="currentPage" :data-count="dataCount"
                    v-if="isShowPagination"></pagination>
    </div>
</template>

<style lang="less">
    .simple-table-component {
        .yunnex-table {
            table-layout: fixed;
            border: 0;
            border-collapse: collapse;
        }
        .yunnex-table-thead {
            line-height: 18px;
            padding: 11px 12px;
            font-size: 14px;
            color: #333;
            background: #f2f2f2;
        }
        .yunnex-table-tr {
            border-bottom: 1px solid #e7eaec;
            background-color: #fff;
        }
        td {
            padding: 8px;
            font-size: 13px;
            color: #676a6c;
        }
    }
</style>

<script>
    var pagination = require('./pagination');

    module.exports = {
        data: function() {
            return {};
        },
        props: {
            titles: {
                type: Object,
                required: true
            },
            datas: {
                type: Array,
                required: true
            },
            isShowPagination: {
                type: Boolean,
                default: false
            },
            pageSize: {
                type: Number,
                required: this.isShowPagination
            },
            currentPage: {
                type: Number,
                default: 1
            },
            dataCount: {
                type: Number
            }
        },
        created: function() {
        },
        components: {
            pagination: pagination
        }
    }
</script>