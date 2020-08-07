var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
    context: __dirname,
    entry: [
        './src/index.tsx',
    ],
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [ {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }, 
        {
            test: /\.html$/,
            loader: "html-loader"
          }
    ],
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', 'jsx' ]
    },
    devServer: {
        contentBase: path.join( __dirname, 'dist' ),
        hot: true,
        watchContentBase: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};