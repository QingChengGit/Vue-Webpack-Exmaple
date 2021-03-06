/**
 * Created by Administrator on 2015/9/19.
 */
var path = require('path'),
    _dirname = './';

module.exports = {
    entry: {
        bundle: "./src/app.js"
    },
    output: {
        path: _dirname + "/dist",
        /*
            要使用webpack的热替换功能则必须正确设置publicPath(其值跟path的最后
            一级目录名相同就行),执行webpack命令编译之后，启动webpack-dev-server
             --inline --hot命令启动webpack-dev-server服务器并自动检测热替换，实
             现自动刷新功能
         */
        publicPath: "/dist/",
        //[name]将会被替换为entry对象的键名，在多实体打包时使用很方便。
        filename: "[name].js"
        //filename: "[hash].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                //使用vue-loader加载器解析.vue文件。vue文件内的css、js代码支持多种预编译语言。如less、sass、coffescript等
                loader: 'vue'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime'],
        //当打包脚本不在项目跟目录下时,可以通过此设置插件的解析路劲!
        filename: path.resolve('node_modules')
    },
    resolveLoader: {
        //设置解析loader的根路径,如果打包脚本在项目根目录则可以不设置此项!
        root: path.resolve('node_modules')
    },
    devtool:'source-map'//设置此属性，使用webpack打包时会自动生成输出文件对应的resource map文件
};