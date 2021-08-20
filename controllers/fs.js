exports.install = function() {

	ROUTE('GET     /fs_load/',   fs_load);
	ROUTE('POST    /fs_save/',   fs_save);
	ROUTE('+API    /api/        -fs              *Fs                  --> query');
	ROUTE('+API    /api/        -fs_search       *Fs                  --> search');
	ROUTE('+API    /api/        +fs_remove       *Fs               	  --> remove');
	ROUTE('+API    /api/        +fs_rename       *Fs/Rename           --> exec');
	ROUTE('+API    /api/        +fs_move         *Fs/Move             --> exec');
	ROUTE('+API    /api/        +fs_create       *Fs                  --> directory');
	ROUTE('+API    /api/        +fs_link         *Fs                  --> share');

};

function fs_load() {
	var $ = this;
	var path = $.query.path || '/';

	var userid = null;

	// Auth - Token check
	var token = $.query.token || '';
	if (token.length)
		userid = token.decrypt(CONF.secret_download);

	// Auth - User check
	if ($.user)
		userid = $.user.id;

	// Auth - Invalid
	if (!userid && !$.user.sa) {
		$.invalid(401);
		return;
	}

	// Perform download
	if (FUNC.valid(path))
		PATH.fs.readFile(FUNC.path(userid, path), 'utf8', function(err, data) {
			if(err) {
				console.error(err);
				$.invalid(500);
			}
			else
				$.success(data);
		});
	else
		$.invalid(404);
}

function fs_save() {
	var $ = this;
	var path = $.query.path || '/';

	var userid = null;

	// Auth - Token check
	var token = $.query.token || '';
	if (token.length)
		userid = token.decrypt(CONF.secret_download);

	// Auth - User check
	if ($.user)
		userid = $.user.id;

	// Auth - Invalid
	if (!userid && !$.user.sa) {
		$.invalid(401);
		return;
	}

	// Save file
	if (FUNC.valid(path))

		PATH.fs.writeFile(FUNC.path(userid, path), $.body.data, 'utf8', function(err, data) {
			if(err) {
				$.invalid(500);
				console.error(err);
			}
			else
				$.success('');
		});

	else
		$.invalid(404);

}

