const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/app');
const BUILD_DIR = path.resolve(__dirname, 'src/public');

const config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test:/\.jsx?$/,
				include: APP_DIR,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015']
				}
			}

		]
	}

};

module.exports = config; 