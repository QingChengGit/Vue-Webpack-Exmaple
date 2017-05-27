<template>
    <base-dialog :dialog-config="config" @dialog-closing="dialogCloseHand">
        <div class="dialog-content-wrap" slot="dialog-content">
            <i :class="dialogIcon" class="dialog-icon" v-if="dialogIcon"></i>
            <p class="dialog-message">{{dialogMessage}}</p>
            <div class="dialog-btn-area" v-if="dialogType!=='autoClose'">
                <div class="btn" :class="" ok-btn>确定</div>
                <div class="btn" cancel-btn v-if="/.*Confirm/.test(dialogType)">取消</div>
            </div>
        </div>
    </base-dialog>
</template>

<style lang="less">
.dialog-content-wrap {
    display: inline-block;
    width: 400px;
    margin: 20px 20px;
    text-align: center;
    .dialog-icon {
        display: inline-block;
        margin-bottom: 12px;
    }
    .dialog-message {
        line-height: 1.2;
        font-size: 14px;
        color: #666;
        text-align: center;
    }
    .dialog-btn-area {
        margin-top: 24px;
    }
}
</style>

<script>
    var dialog = require('./dialog');

    module.exports = {
        data: function() {
            return {};
        },
        props: {
            /*
                type: 'tipAlert', 'tipConfirm', 'warnAlert', 'warnConfirm', 'autoClose'
             */
            dialogType: {
                type: String,
                required: true
            },
            dialogMessage: {
                type: String,
                required: true
            },
            dialogIcon: {
                type: String
            },
            isShow: {
                type: Boolean,
                default: false
            },
            closeHand: {
                type: Function
            }
        },
        computed: {
            config: function() {
                var obj = {
                    closeClass: 'dialog-close',
                    isShow: this.isShow
                };
                return obj;
            }
        },
        methods: {
            dialogCloseHand: function(flag) {
                this.$emit('close', flag);
            }
        },
        components: {
            'baseDialog': dialog
        }
    };
</script>