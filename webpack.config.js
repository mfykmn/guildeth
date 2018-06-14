const path = require('path');

module.exports = {
    entry: [
        './src/quests.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {url: false}},
                ],
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000
    },
    performance: { hints: false }
};
