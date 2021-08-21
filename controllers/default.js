exports.install = function() {
	ROUTE('+GET /');
	ROUTE('+GET /explorer', 'index');
	ROUTE('+GET /designer', 'index');
	ROUTE('+GET /browser', 'index');
	ROUTE('+GET /main', 'index');
};