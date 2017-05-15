<template>
    <div class="wrap">
        <input class="message-input" type="text" v-model="message" placeholder="type some thing"/>
        <div class="greet-message">{{greeting | formatStr}}</div>
    </div>
</template>

<style lang="less">
    .wrap {
        .message-input {
            width: 150px;
            height: 30px;
        }
        .greet-message {
            margin-top: 10px;
            color: #fff;
            background-color: green;
        }
    }
</style>

<script>
    module.exports = {
        data: function() {
            return {
                message: ''
            };
        },
        computed: {
            greeting: function() {
                return 'welcome, you typed ' + this.message;
            }
        },
        filters: {
            formatStr: function(val) {
                return val + '--' + (new Date()).getTime();
            }
        }
    };
</script>