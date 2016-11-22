exports.index = function(req, res){
	//res.status(400);
	res.removeHeader("X-Powered-By");
	console.log('I am in the remove file!');
	res.send('Remove!');
}