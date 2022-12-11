"use strict";

let path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/js/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
    watch: false,
    devtool: "source-map",
    module: {}
};