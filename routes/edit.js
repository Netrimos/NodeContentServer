exports.index = function(req, res){
	//res.status(400);
	res.removeHeader("X-Powered-By");
	console.log('I am in the edit file!');
	res.send('<html><body><h1>Edit Instructions</h1></body></html>');
}

exports.editPage = function(req, res){
	res.removeHeader("X-Powered-By");
	console.log('Page being Edited!');
	res.send('Editing Page');
}

exports.editItem = function(req, res){
	res.removeHeader("X-Powered-By");
	console.log('Item being Edited!');
	res.send('Editing Item');
}