var debug = process.env.BUILDX !== 'production';
var path = require("path");

console.log("debug --->",debug);

var DIST_DIR = path.resolve(__dirname,"dist")
var SRC_DIR = path.resolve(__dirname,"src")

var config = {
	entry : SRC_DIR + "/app/index.js",
  devtool : debug ? "inline-sourcemap" : null,
	output: {
		path: DIST_DIR+ "/app",
		filename: "bundle.min.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query:{
					presets: ["react","es2015","stage-2"]
				}
			}
		]
	}
}

module.exports= config;
