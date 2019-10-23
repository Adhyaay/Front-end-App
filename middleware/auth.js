const config = require('../config');
const jwt = require('jsonwebtoken');
const errors = require("restify-errors");


function auth(req, res, next){
	const token = req.header('x-auth-token');

	// Check for token
	if(!token) {
		const message = "Token not valid,  autherization denied";
      return next(new errors.UnauthorizedError(message));
	}

	try{
		// verify token
		const decoded = jwt.verify(token, config.JWT_SECRET);

		// Add user from payload
		req.user = decoded;
		next();
	}catch(e){
		const message = "Token not valid,  autherization denied";
      return next(new errors.UnauthorizedError(message));
	}
	
}

module.exports = auth;