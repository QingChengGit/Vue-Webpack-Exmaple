<template>
    <navigation :nav-list="lists" :is-vertical="isVertical"></navigation>
</template>

<script>
    var navigation = require('./navBar');

    module.exports = {
        data: function() {
            return {
                lists: [
                    {id: '001', name: '派券中心', uri: '/tickets', target: '_blank'},
                    {id: '002', name: '外卖管理', uri: '/takePackage'},
                    {id: '003', name: '微信商城', uri: './wxMall', target: '_self'},
                    {id: '004', name: '新客营销', uri: './newMarketing', target: '_self'}
                ],
                isVertical: false
            };
        },
        components: {
            navigation: navigation
        }
    };
</script>