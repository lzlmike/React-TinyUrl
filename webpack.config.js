
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js/');
var APP_DIR = path.resolve(__dirname, 'app');

console.log(BUILD_DIR);

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR ,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                include : APP_DIR,
            }
        ]
    }
};
module.exports = config;