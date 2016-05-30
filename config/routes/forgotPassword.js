'use strict';

let express = require('express'),
    router = express.Router(),
    forgot = require('../../services/ForgotPasswordService.js'),
	config = require('../config.js'),
	common = require(config.common.fileCommon);

router.post(common.routes.forgotPassword.sendEmail, forgot.SendEmail.bind(forgot));
router.post(common.routes.forgotPassword.receiveToken, forgot.ResetPassword.bind(forgot));
module.exports = router;