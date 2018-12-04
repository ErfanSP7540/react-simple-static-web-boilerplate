const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssOutput = 'style.css'


module.exports=(env)=>{
    return {
        entry:'./src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader' ],
                    fallback: 'style-loader'
                })
            }
            
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    devtool: (env === "production" ? 'source-map' :'inline-source-map'),
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    }
}};