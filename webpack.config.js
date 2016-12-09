var webpack = require('webpack');

module.exports = {
	entry : [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals : {
		jquery : 'jQuery'
	},
	plugins : [
		new webpack.ProvidePlugin({
			'$' : 'jquery',
			'jQuery' : 'jquery'
		})
	],
	output : {
		path : __dirname,
		filename : './public/bundle.js'
	},
	resolve : {
		root : __dirname,
		alias : {
			Main : 'app/components/main.jsx',
			Nav : 'app/components/nav.jsx',
			Weather: 'app/components/weather.jsx',
			About: 'app/components/about.jsx',
			Example : 'app/components/example.jsx',
			WeatherForm : 'app/components/weatherform.jsx',
			WeatherMessage : 'app/components/weathermessage.jsx',
			openWeatherMap : 'app/api/openweathermap.jsx',
			ErrorModal : 'app/components/errormodel.jsx',
			applicationStyles : 'app/styles/app.css'
		},
		extensions : ['', '.js', '.jsx']
	},
	module : {
		loaders : [
			{
				loader : 'babel-loader',
				query : {
					presets : ['react', 'es2015']
				},
				test : /\.jsx?$/,
				exclude : /(node_modules | bower_components)/
			}
		]
	},
	devtool : 'cheap-module-eval-source-map'
};
