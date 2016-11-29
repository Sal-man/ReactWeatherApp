module.exports = {
	entry : './app/app.jsx',
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
			openWeatherMap : 'app/api/openweathermap.jsx'
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
