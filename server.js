'use strict';

var express = require('express'); // charge ExpressJS
var serveIndex = require('serve-index');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackDevMiddleware = require("webpack-dev-middleware");

var ws = require('./webservice.js');

var app = express();

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
app.use('/app/wpk/', webpackDevMiddleware(compiler, {}));
app.use('/ws/', ws);
app.use(express.static('.'));
app.use(serveIndex('.', {
	icons: true
}));



app.use(['/app/product', '/app/contact', '/app/service'], function(req, res, next) {
	console.log('rewriting', req.url);
	res.sendFile('app/index.html', {
		root: __dirname
	});
});

app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function() {
	console.log('server started on port 8000');
});
