/**
 * Created by qingcheng on 2017/05/15.
 */
var path = require('path'),
    dir = path.resolve('../Vue-Webpack-Exmaple'),
    nodeModulesDir = path.resolve('node_modules'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: dir,
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: dir + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: nodeModulesDir,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            }
        ]
    },
    resolve: {
        modules: [nodeModulesDir, dir],
        extensions: ['.js', '.vue']
    },
    resolveLoader: {
        modules: [nodeModulesDir]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};