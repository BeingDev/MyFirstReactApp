 

var React = require('react');
var Router = require('react-router');


var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes =(
		<Route name="app" path="/" handler = {require("./components/app.js")}>
			<DefaultRoute handler={require("./components/homePage.js")} />
			<Route name="authors"  handler={require("./components/authors/authorPage.js")} />
			<Route name="about" handler={require("./components/about/aboutPage.js")} />
			<NotFoundRoute handler={require('./components/NotFoundPage')} />
		</Route>
	);


module.exports = routes;