const path = require("path");

const PUBLIC_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
    entry: SRC_DIR + "/app.js",
    output: {
        path: PUBLIC_DIR ,
        filename: "bundle.js",
    },
    devtool:"cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {}
                    }   
                ]
            }
        ]
    },
    mode: "development"
};

module.exports = config;