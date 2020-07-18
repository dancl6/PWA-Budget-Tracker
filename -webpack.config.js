const path = require("path");
const webpack = require("webpack");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
    entry: './public/js/index.js',
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
    }
}