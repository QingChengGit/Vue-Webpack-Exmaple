<template>
    <ul class="yunnex-pagination" v-on:click="clickPageItem">
        <li class="pagination-item {'disabled': currentPage == 1}" page="first">首页</li>
        <li class="pagination-item {'disabled': currentPage == 1}" page="prev">上一页</li>
        <li class="pagination-item" v-for="n in pageSize" page="n">
            {{n}}
        </li>
        <li class="pagination-item {'disabled': currentPage == pageSize}" page="next">下一页</li>
        <li class="pagination-item {'disabled': currentPage == pageSize}" page="last">尾页</li>
        <li class="pagination-item pagination-desc">
            <span class="page-static">
                共{{pageSize}}页
            </span>
            <span v-if="typeof dataCount !=='undefined'">
                ,{{dataCount}}条记录
            </span>
            <span class="page-static page-jump">
                到<input type="text" class="yunnex-input" v-model="inputPage"/>
                <div class="yunnex-btn jump-page-btn" v-on:click="jumpPage">确定</div>
            </span>
        </li>
    </ul>
</template>

<style lang="less">
    .yunnex-pagination {
        .pagination-item {
            display: inline-block;
            margin: 0 4px;
            padding: 4px 9px;
            border: 1px solid #DDDDDD;
            border-radius: 6px;
            color: #333;
            background-color: #FFFFFF;
            vertical-align: middle;
            &:hover {
                color: #fff;
                background: #1eb596;
            }
            &:first-child {
                margin-left: 0;
            }
            &:last-child {
                margin-right: 0;
            }
        }
        .pagination-desc {
            border: 0;
        }
        .page-static {
            vertical-align: middle;
        }
        .page-jump {
            margin-left: 10px;
        }
        .jump-page-btn {
            display: inline-block;
            width: 40px;
        }
    }
</style>

<script>
    module.exports = {
        data: function() {
            return {inputPage: ''};
        },
        props: {
            pageSize: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                default: 1
            },
            dataCount: {
                type: Number
            }
        },
        methods: {
            clickPageItem: function(evt) {
                var target = evt.target,
                    currentPage;

                if(currentPage = target.hasAttribute('page')){
                    this.currentPage = parseInt(currentPage, 10);
                    this.$emit('jumpToPage', currentPage);
                }
            },
            jumpPage: function() {
                this.currentPage = this.inputPage;
                this.$emit('jumpToPage', this.currentPage);
            }
        }
    };
</script>