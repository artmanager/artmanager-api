'use strict';
var express = require('express'),
	router = express.Router(),
	report = require('../../services/ReportService.js'),
	config = require('../config.js'),
    common = require(config.common.fileCommon);

router.post(common.routes.report.getReportProduct, report.ReportProduct.bind(report));
router.post(common.routes.report.getReportSupplier, report.ReportSupplier.bind(report));
router.post(common.routes.report.getReportSales, report.ReportSales.bind(report));

module.exports = router;