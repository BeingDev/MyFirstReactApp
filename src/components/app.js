'use strict';
var React = require('react');
var Header = require('./common/header.js');
var RouteHandler = require('../routes');
var App = React.createClass({
    render: function() {
        return(
        	<div>
        		<Header />
                <div className="container">
        		  <RouteHandler />
                </div>
        	</div>
        	);
    }
});

module.exports = App;