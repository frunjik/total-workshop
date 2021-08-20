AUTH(function($) {
	// Here you can implement your custom authorization.
	// User's id is used as root folder.
	$.success({ id: '', name: 'Admin', sa: true });
});