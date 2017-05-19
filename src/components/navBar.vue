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
        font-size: 0;
        .navbar-li {
            width: 180px;
            display: inline-block;
            border-right: 1px solid #a7b1c2;
            vertical-align: middle;
        }
        .navbar-item-a {
            position: relative;
            display: block;
            height: 45px;
            line-height: 45px;
            padding: 0 10px;
            color: #fff;
            background-color: #33b5d4;
            text-decoration: none;
            cursor: pointer;
        }
        .navbar-item-active, .navbar-item-a:hover {
            color: #33b5d4;
            background-color: #fff;
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
            display: block;
            border-right: none;
            border-bottom: 1px solid #a7b1c2;
        }
    }
</style>

<script>
    module.exports = {
        data: function() {
            //防止组件修改父组件数据
            return {
                list: this.navList ? this.navList.concat([]) : [],
                selectedItem: function() {
                    return this.getSelectedItem();
                }
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
        },
        methods: {
            setSelectedItem: function(id) {
                this.list.some(function(item, index, arr) {
                    if(item.id === id.toString()){
                        item.active = true;
                        return true;
                    }
                });
            },
            getSelectedItem: function() {
                this.list.some(function(item, index, arr) {
                    if(item.active){
                        return item;
                    }
                });
            }
        }
    };
</script>