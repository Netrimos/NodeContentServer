//var config = require('../config');
//var common = require('../common');


exports.index = function(req, res){
	res.removeHeader("X-Powered-By");
	//res.status(400);
	res.send('View!');
}

/*
exports.streamFile = function(req, res){
	res.removeHeader("X-Powered-By");
	var lobReq = req.params.lob;
	var build = req.params.build;
	var pageReq = req.params.page;
	var langReq = req.params.langu;


/*-- Collector for Error Messages--
	//var errorMsg = 0;

/*--Language Request from Client matched to ../config.js (defaults to en)--
	var langAvail = config.application.languages
	var langVal = common.getObjectDetail(langAvail,langReq,false);

/*--LOB request from Client matched to ../config.js--
	var lobAvail = config.application.lob;/*get the name of the object--
	var lobVal = common.getObjectDetail(lobAvail,lobReq,false);

/*--Page Request from Client matched to LOB and ../config.js--
	var pageAvail = config.application.lob[lobVal].pages;
	var pageVal = common.getObjectDetail(pageAvail,pageReq,false);	

/*--Build request from CLient matched to ../Config--
	var buildAvail = config.application.releases;
	var buildVal = common.getObjectDetail(buildAvail,build,false);

/*--Render Final content to the page--

	res.send('Serving Release: ' + lobVal + ' v.' + buildVal + ' on ' + pageVal + ' in ' + langVal);
}
*/