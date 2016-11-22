var express = require("express");
var app = express();

var edit = require('./routes/edit');
var remove = require('./routes/remove');
var updated = require('./routes/updated');
var view = require('./routes/view');
var config = require('./config');
var common = require('./common');

/*--Temp, this is just a test for a global configuration file in config.js.--*/
	//console.log(config.application.lob.Bank.urlString);

app.get('/edit', edit.index);
app.get('/edit/item/:build?/:item?/:langu?', edit.editItem);
app.get('/edit/:build?/:page?/:langu?', edit.editPage);
app.get('/remove', remove.index);
app.get('/updated', updated.index);
app.get('/view', view.index);
app.get('/view/:lob?/:build?/:page?/:langu?', common.processRoute);
//app.get('/view/:lob?/:build?/:page?/:langu?', thisIsATest );

app.get('*', function(req, res){
	res.status(400);
	res.send("Route does not exist: Please contact <a href='mailto:erik.thompson@ally.com' subject='Ally CMS Usage'>Erik Thompson</a> with questions.");
});


function directRequest(req, res){
		
}

//console.log(common.streamFile);
//console.log(common.requestObject.lob);

/*--Start Server--*/
var server = app.listen(3000, function(){
	console.log('Server Started, let\'s make some content on port 3000');
});