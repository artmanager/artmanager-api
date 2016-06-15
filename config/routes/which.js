'use strict';
var express = require('express');
var router = express.Router();
let which = require('../../services/WhichService.js'),
    config = require('../config.js'),
	common = require(config.common.fileCommon);


router.post(common.routes.which.getWhich, which.GetWhich.bind(which));
router.post(common.routes.which.getWhichByClient, which.WhichByClient.bind(which));
router.post(common.routes.which.postWhich, which.InsertWhich.bind(which));
router.put(common.routes.which.putUpdateEntrancePending, which.UpdateEntrancePending.bind(which));
router.post(common.routes.which.deleteWhich, which.DeleteWhich.bind(which));


module.exports = router;