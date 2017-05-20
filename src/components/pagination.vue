<template>
    <ul class="yunnex-pagination" v-on:click="clickPageItem">
        <li :class="{'pagination-item': true, 'disabled': page === 1}" :page="page > 1 ? 'first' : false">首页</li>
        <li :class="{'pagination-item': true, 'disabled': page === 1}" :page="page > 1 ? 'prev' : false">上一页</li>
        <li :class="{'pagination-item': true, 'page-selected': page === n}" v-for="n in pageSize" :page="n">
            {{n}}
        </li>
        <li :class="{'pagination-item': true, 'disabled': page == pageSize}" :page="page < pageSize ? 'next' : false">下一页</li>
        <li :class="{'pagination-item': true, 'disabled': page == pageSize}" :page="page < pageSize ? 'last' : false">尾页</li>
        <li class="pagination-item pagination-desc">
            <span class="page-static">
                共{{pageSize}}页
            </span>
            <span class="page-static" v-if="typeof dataCount !=='undefined'">
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
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        .pagination-item {
            display: inline-block;
            margin: 0 4px;
            padding: 4px 9px;
            border: 1px solid #DDDDDD;
            border-radius: 6px;
            color: #333;
            background-color: #FFFFFF;
            vertical-align: middle;
            cursor: pointer;
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
        .page-selected {
            color: #fff;
            background: #1eb596;
        }
        .pagination-desc {
            border: 0;
            cursor: none;
            &:hover {
                color: #333;
                background-color: #FFFFFF;
            }
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
            cursor: pointer;
        }
    }
</style>

<script>
    module.exports = {
        data: function() {
            return {
                inputPage: '',
                page: this.currentPage
            };
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
                if(target.hasAttribute('page')){
                    currentPage = target.getAttribute('page');
                    if(isNaN(currentPage)){
                        switch (currentPage){
                            case 'first':
                                currentPage = 1;
                                break;
                            case 'prev':
                                currentPage = this.page - 1;
                                break;
                            case 'next':
                                currentPage = this.page + 1;
                                break;
                            case 'last':
                                currentPage = this.pageSize;
                                break;
                        }
                    }
                    this.page = parseInt(currentPage, 10);
                    this.$emit('jump-to-page', this.page);
                    console.log(this.page);
                }
            },
            jumpPage: function() {
                if(!isNaN(this.inputPage) && (this.inputPage >= 1 && this.inputPage <= this.pageSize)){
                    this.page = this.inputPage;
                    this.$emit('jump-to-page', this.page);
                }else if(/\.+/.test(this.inputPage)){
                    alert('输入的页码不能为非整数!');
                }else{
                    alert('请输入1-' + this.pageSize + '之间的整数页码!');
                }
            }
        }
    };
</script>