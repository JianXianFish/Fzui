let path = require('path');
let webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const NODE_ENV = process.env.NODE_ENV;
let publicPath = '/dist/';
if (NODE_ENV === 'production') {
    publicPath = './'
}

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: publicPath,
        filename: 'build.js'
    },
    devServer: {
        historyApiFallback: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader"]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //排除掉node_module目录
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'] //转码规则
                    }
                },
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: './[name]_[hash:7].[ext]',
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        overlay: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"), new VueLoaderPlugin()
    ]
};
