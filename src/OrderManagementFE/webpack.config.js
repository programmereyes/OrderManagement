const path=require("path");
const webpack=require("webpack");
const webpackMerge=require("webpack-merge");
const { env } = require("process");
const modeConfig=(env)=>require(`./build-utils/webpack.${env}`)(env)
const webpackHtmlWebpackplugin=require("./build-utils/webpack.htmlwebpackplugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports=({mode,presets}={mode:"production",presets:[]})=>(
    webpackMerge.merge({
        mode:mode,
        entry:"./src/index.js",
        output:{
            path:path.resolve(__dirname,"dist"),
            filename:"bundle.js"
        },
        module:{
            rules:[
                {
                    test:/\.jsx?$/,
                    loaders:["babel-loader"]
                },
                // {
                //     test:/\.css$/,
                //     loaders:["style-loader","css-loader"]
                // },
                {
                    test:/\.css$/,
                    loaders:[{loader:MiniCssExtractPlugin.loader},"css-loader"]
                },
                {
                    test:/\.jpe?g$/,
                    loaders:[{
                        loader:"url-loader",
                        options:{
                            limit: 5000
                        }
                    }]
                }
            ]
        },
        plugins:[
            webpackHtmlWebpackplugin(path.join(__dirname,"src","index.html"),
            {title:"Employee Management"}),
            new MiniCssExtractPlugin({
                filename:"app-[hash:20].css",
                chunkFilename:"[id].css",
                ignoreOrder:false
            })
        ]
    },modeConfig(mode))
);