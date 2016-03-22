module.exports = {
	"db" : {
			"hostDb" 		: "localhost",
			"portDb" 		: "5432",
			"dialectDb" 	: "postgres",
			"userDb" 		: "vagrant",
			"passwordDb"	: "vagrant",
			"dataSourceDb" 	: "artmanager_development",
			"storeDb"		: "path/to/database.postgres"
	},
	"application" : {
		"url" : "http://localhost:3000"
	},
	"common" : {
		"fileCommon" : "../../../artmanager-common/common.js"
	}
}
