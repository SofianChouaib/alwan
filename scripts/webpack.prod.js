const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',

    optimization: {
        minimizer: [
            new TerserPlugin({
            terserOptions: {
                mangle: {
                    properties: {
                        regex: /^_/,
                        reserved: ['_c', '_e', '_s'],
                    }
                }
            }
        })]
    }
});