exports.index = function(req, res){
	//res.status(400);
	res.removeHeader("X-Powered-By");
	console.log('I am in the updated file!');
	res.send('Updated!');
}