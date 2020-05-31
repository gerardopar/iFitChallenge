// * importing modules 
const path = require('path'); // * absolute path

// * importing plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // * generates a css file
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // * minifies css
const TerserPlugin = require('terser-webpack-plugin'); // * minifies javascript

// * webpack mode
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'], // webpack entry point
    output: {
        filename: 'bundle.js', // webpack output file
        path: path.resolve(__dirname, 'public') // webpack output point / directory
    },
    module: { // # loaders
        rules: [
            { // # js loader 
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            { // # styles loader
                test: /\.scss$/, // tests for a sass file
                use: [
                    MiniCssExtractPlugin.loader, // compiles CSS into a seperate file
                    { loader: 'css-loader' }, // translates CSS into CommonJS
                    { loader: 'sass-loader' } // compiles Sass to CSS, using Node Sass by default
                    ]
            },
            { // # file loader
                test: /\.(png|svg|jpg|gif)$/, // tests for an img
                use: [
                    { loader: 'file-loader' }
                ]
            }
        ]
    },
    optimization: { // # optimization
        minimizer: [
            new OptimizeCssAssetsPlugin(), // minifies css
            new TerserPlugin() // minifies javascript
        ]
    },
    plugins: [ // # plugins
        new MiniCssExtractPlugin({ // generates a css file
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    // # development
    devServer: { // webpack development server
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        open: 'Google Chrome'
    },
    devtool: 'source-map', // source maps for debugging
    mode: devMode ? 'development' : 'production' // webpack mode
};
