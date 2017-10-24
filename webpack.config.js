var path = require('path');

module.exports = {
    entry: __dirname+'/src/main.js',
    output: { path: __dirname+'/public/javascripts', filename: "bundle.js" },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devtool:"source-map"
};