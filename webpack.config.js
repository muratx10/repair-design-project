const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const conf = {
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        publicPath: '/',
        watchContentBase: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: './postcss.config.js' }}
                    },
                    {
                        loader: 'sass-loader',
                        options:
                            {
                                // Prefer `dart-sass`
                                implementation: require('sass'),
                                sourceMap: true
                            }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./assets/styles/styles.css",
            sourceMap: true
        })
    ]
};

module.exports = conf;