var path = require( 'path' );

module.exports = {
    //context: path.join( __dirname, 'src' ),
    entry: './src/index.tsx',
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'bundle.js',
        publicPath: '/assets',
    },
    devtool: 'source-map',
    module: {
        rules: [ {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        }, ],
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', 'jsx' ]
    },
};