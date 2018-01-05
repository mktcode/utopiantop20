/**
 * GET /
 */
exports.upvote = function(req, res) {
	var sql = require("seriate");
	var config = {
	    "server": "sql.steemsql.com",
	    "user": "steemit",
	    "password": "steemit",
	    "database": "DBSteem"
	};

	sql.setDefaultConfig( config );

	sql.execute( {
	        query: sql.fromFile( "../sql/top20upvote.sql" )
	    } ).then( function( results ) {
	    	res.render('upvote', {data:results, title: 'Upvote'} );
	    }, function( err ) {
	        res.render('deadlock', {error: err});
    } );
};


