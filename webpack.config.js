/**
 * Created by Administrator on 2015/9/19.
 */
var _dirname = './';
module.exports = {
    entry: "./script/vues/articleVue.js",
    output: {
        path: _dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                //使用vue-loader加载器解析.vue文件。vue文件内的css、js代码支持多种预编译语言。如less、sass、coffescript等
                loader: 'vue-loader'
            }
        ]
    },
    devtool:'source-map'//设置此属性，使用webpack打包时会自动生成输出文件对应的resource map文件
};