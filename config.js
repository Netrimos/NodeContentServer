exports.application = 
	{	"languages" : {
			"en" : {"label" : "English"},
			"es" : {"label" : "Español"},
			"fr" : {"label" : "Français"},
			"de" : {"label" : "Deutsche"},
			"default" : "en"
		},
		"lob" :{ 
			"Bank" : {
				"pages" : {
					"Detail" : {"urlString" : "/Detail"},
					"Transfer" : {"urlString" : "/Transfer"},
					"Payments" : {"urlString" : "/Payments"},
					"default" : "Detail"
				},
				"urlString" : "/Bank"
			},
			"Auto" : {
				"pages" : {
					"Detail" : {"urlString" : "/Detail"},
					"AutoList" : {"urlString" : "/AutoList"},
					"Payments" : {"urlString" : "/Payments"},
					"default" : "AutoList"
				},
				"urlString" : "/Auto"
			},
			"Dash" : {
				"pages" : {
					"Login" : {"urlString" : "/Login"},
					"Profile" : {"urlString" : "/Profile"},
					"OTP" : {"urlString" : "/OTP"},
					"default" : "Login"
				},
				"urlString" : "/"
			},
			"Wealth" : {
				"pages" : {
					"Detail" : {"urlString" : "/Detail"},
					"Dash" : {"urlString" : "/Dash"},
					"Invest" : {"urlString" : "/Invest"},
					"default" : "Dash"
				},
				"urlString" : "/Wealth"
			},
			"Opening" : {
				"pages" : {
					"Blind1" : {"urlString" : "/PersInfo"},
					"Blind2" : {"urlString" : "/ClientDetail"},
					"Blind3" : {"urlString" : "/FulfilmentOptions"},
					"default" : "Blind1"
				},
				"urlString" : "/Opening"
			},
			"default" : "Dash"
		},
		"releases":{
			"16.1" : { 
				"active" : false,
				 "date" : ""
				},
			"16.1.1" : { 
				"active" : false,
				 "date" : ""
				},
			"16.1.2" : { 
				"active" : true,
				 "date" : ""
				},
			"16.2" : { 
				"active" : true,
				 "date" : "06/25/2016"
				},
			"16.2.1" : { 
				"active" : true,
				 "date" : "07/01/2016"
				},
			"16.2W" : { 
				"active" : true,
				 "date" : "07/23/2016"
				},
			
			"16.2.2" : { 
				"active" : true,
				 "date" : "07/29/2016"
				},
			"16.3" : { 
				"active" : true,
				 "date" : "09/17/2016"
				},
			"16.3.1" : { 
				"active" : true,
				 "date" : ""
				},
			"16.3.2" : { 
				"active" : true,
				 "date" : ""
				},
			"16.4" : { 
				"active" : true,
				 "date" : ""
				},
			"default" : "16.2W"

		},
		"appFunctions" : {
			"view" : true,
			"edit" : true,
			"remove" : true,
			"updated" : true,
			"default" : "view"
		}
	}
