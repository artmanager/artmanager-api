module.exports = {
    "db": {
        "hostDb": "localhost",
        "portDb": "5432",
        "dialectDb": "postgres",
        "userDb": "postgres",
        "passwordDb": "postgres",
        "dataSourceDb": "artmanager_development",
        "storeDb": "path/to/database.postgres"
    },
    "application": {
        "url": "http://localhost:3000",
        "landingPage": "http://artmanager.com.br"
    },
    "common": {
        "fileCommon": "../../../artmanager-common/common.js"
    },
    "resetPassword": {
        "strSMTP": "smtps://artmanager.app@gmail.com:download666@smtp.gmail.com",
    }
}