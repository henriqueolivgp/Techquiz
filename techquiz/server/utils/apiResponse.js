exports.prepareResponse = (data = {}, success = true, status = 200) => ({ status, success, data: data });

exports.send = (res, { status, success = true, data }) =>
	res.status(status).json({
		success,
		data: data
	});

exports.badRequest = res =>
	res.status(400).json({
		message: 'API_ERROR_INVALID_REQUEST',
		data: {}
	});

exports.unauthorized = (res, msg) =>
	res.status(401).json({
		message: msg,
		data: {}
	});

exports.notFound = res =>
	res.status(404).json({
		message: 'API_ERROR_NOT_FOUND',
		data: {}
	});