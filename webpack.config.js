/**
 * Created by qingcheng on 2017/05/15.
 */
var path = require('path'),
    dir = path.resolve('../localdevelop/customer'),
    fs = require('fs'),
    entries = {},
    webpack = require('webpack'),
    nodeModulesDir = path.resolve('node_modules'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    SpritesmithPlugin = require('webpack-spritesmith'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    config;

var config = {
    context: dir,
    entry: entries,
    output: {
        path: dir + "/dist",
        filename: "js/[hash]-[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'less-loader'
                            }
                    ]
                })
            },
            {
                test: /\.vue$/,
                exclude: nodeModulesDir,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }/*,
            {test: /\.png$/, loaders: [
                'file-loader?name=i/[hash].[ext]'
            ]}*/
        ]
    },
    resolve: {
        modules: [nodeModulesDir, dir],
        extensions: ['.js', '.vue'],
        alias: {
            'vue': dir + '/js/lib/vue.min.js',
            'vue-resource': dir + '/js/lib/vue-resource.min'
        }
    },
    resolveLoader: {
        modules: [nodeModulesDir]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*'], {
            root: dir,
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin("css/[hash]-[name].css"),
        new SpritesmithPlugin({
            // 目标小图标
            src: {
                cwd: dir + '/images/icons/',
                glob: '*.png'
            },
            // 输出雪碧图文件及样式文件
            target: {
                image: dir + '/images/sprite.png',
                css: dir + '/styles/sprite.css'
            },
            // 样式文件中调用雪碧图地址写法
            apiOptions: {
                cssImageRef: '../images/sprite.png'
            }
        }),
        new CopyWebpackPlugin([
            {from: dir + '/json', to: dir + '/dist/json'}
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        })
    ]
};
fs.readdirSync(dir + '/js/').forEach(function(el, index, arr) {
    if(fs.statSync(dir + '/js/' + el).isFile()){
        entries[el.split('.')[0]] = dir + '/js/' + el;
        config.plugins.push(new HtmlWebpackPlugin({
            chunks: ['vendor', el.split('.')[0]],
            template: dir + '/' + el.split('.')[0] + '.html',
            filename: el.split('.')[0] + '.html'
        }));
    }
});

module.exports = config;
