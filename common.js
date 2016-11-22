
/*--
Submit an Object, a key, and  true/false if you want the object returned
	Returns default value or the object
	This will returnObj true or object based on the returnObj switch
key = string
obj = Object
returnObj = boolean
--
exports.getObjectDetail = function(obj, key, returnObj){
	var isRequestAvail = Object.prototype.hasOwnProperty.call(obj, key);
	if (!returnObj){
		if (!isRequestAvail) return obj.default;
		else return key;
	}
	else if ( returnObj && isRequestAvail) return obj[key];
	else return obj.default;	
}
*/
var getObjectDetail = function(obj, key, returnObj){
	var isRequestAvail = Object.prototype.hasOwnProperty.call(obj, key);
	if (!returnObj){
		if (!isRequestAvail) return obj.default;
		else return key;
	}
	else if ( returnObj && isRequestAvail) return obj[key];
	else return obj.default;	
}


/*------------Test--------------*/

var langVal;
var lobVal;
var pageVal;
var buildVal;

var config = require('./config');

exports.processRoute = function(req, res){
	res.removeHeader("X-Powered-By");
	var lobReq = req.params.lob;
	var build = req.params.build;
	var pageReq = req.params.page;
	var langReq = req.params.langu;
	


/*-- Collector for Error Messages--*/
	//var errorMsg = 0;

/*--Language Request from Client matched to ../config.js (defaults to en)--*/
	var langAvail = config.application.languages
	var langVal = getObjectDetail(langAvail,langReq,false);

/*--LOB request from Client matched to ../config.js--*/
	var lobAvail = config.application.lob;/*get the name of the object--*/
	var lobVal = getObjectDetail(lobAvail,lobReq,false);

/*--Page Request from Client matched to LOB and ../config.js--*/
	var pageAvail = config.application.lob[lobVal].pages;
	var pageVal = getObjectDetail(pageAvail,pageReq,false);	

/*--Build request from CLient matched to ../Config--*/
	var buildAvail = config.application.releases;
	var buildVal = getObjectDetail(buildAvail,build,false);

/*--Return Final content to the Function--
	return {
		"lob" : lobVal,
		"build" : buildVal,
		"page" : pageVal,
		"language" : langVal
	};*/
	res.send('Serving Release: ' + lobVal + ' v.' + buildVal + ' on ' + pageVal + ' in ' + langVal);
}

//exports.requestObject = {"lob" : lobVal,"page" : pageVal};


