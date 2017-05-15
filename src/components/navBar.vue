<template>
    <ul class="navbar-ul">
        <li :class="{'navbar-li': true, 'vertical': isVertical}" v-for="item in list">
            <a :class="{'navbar-item-active': item.isActive, 'navbar-item-a': true}" :href="item.uri" :target="item.target || ''">
                <i :class="item.iconClass"></i>
                <span class="nav-item-text-span">{{item.name}}</span>
                <i class="icon-arrow-down arrow"></i>
            </a>
        </li>
    </ul>
</template>

<style lang="less">
    .navbar-ul {
        width: 180px;
        font-size: 0;
        .navbar-li {
            border-bottom: 1px solid #a7b1c2;
            color: #fff;
            background-color: #293846;
        }
        .navbar-item-a {
            position: relative;
            display: block;
            height: 45px;
            line-height: 45px;
            padding: 0 10px;
            cursor: pointer;
        }
        .nav-item-text-span {
            margin-left: 6px;
            line-height: 1;
            font-size: 14px;
            vertical-align: middle;
        }
        .arrow {
            position: absolute;
            top: 50%;
            right: 10px;
            -webkit-transform: translate(0, -50%);
            -moz-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            -o-transform: translate(0, -50%);
            transform: translate(0, -50%);
        }
        .vertical {
            display: inline-block;
            vertical-align: middle;
        }
    }
</style>

<script>
    module.exports = {
        data: function() {
            //防止组件修改父组件数据
            return {
                list: this.navList ? this.navList.concat([]) : []
            };
        },
        props: {
            navList:{
                type: Array,
                required: true
            },
            isVertical: {
                type: Boolean,
                default: true
            }
        }
    };
</script>