var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('./node_modules/html-webpack-plugin');

var base_c = require('./chore/chore.config');

module.exports = function makeWebpackConfig() {

    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    var config = {};

    config.target = 'node';

    config.resolve = {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    };

    config.entry = {
        app: path.join(__dirname, base_c.src, base_c.app, 'index.ts')
    };

    config.output = {
        path: path.join(__dirname,base_c.dist),
            filename: "bundle.js"
    };

    config.module = {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'baggage?[file].html&[file].css'
            }
        ],
        loaders: [
            , {test: /\.css$/, loader: "style!css"}
            , {test: /\.scss$/, loader: "style!css!sass"}
            // specify option using query
            , {test: /\.tsx?$/, exculde:"*.jasmine.ts",loader: 'ts-loader?compiler=ntypescript'}
            , {test: /\.html$/, loader: 'ngtemplate?relativeTo=' + __dirname + '/!html'}
            , {
                test: [/\.svg/],
                loader: 'file?name=assets/images/[name].[ext]'
            }
            // inline base64 URLs for <=8k images, direct URLs for the rest
            //{test: /\.(svg|png|jpg)$/, loader: 'url-loader?limit=8192'}

        ]
    };

    config.plugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(base_c.src, 'index.ejs')
        })
        //, new webpack.optimize.UglifyJsPlugin()
    ];

    return config;

}();