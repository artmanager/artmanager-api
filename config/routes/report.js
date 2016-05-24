'use strict';
var express = require('express'),
	router = express.Router(),
	report = require('../../services/ReportService.js'),
	config = require('../config.js'),
    common = require(config.common.fileCommon);

router.get(common.routes.report.getReportProduct, report.ReportProduct.bind(report));
router.get(common.routes.report.getReportSupplier, report.ReportSupplier.bind(report));
router.post('/report/:id', function (req, res) { res.json({ 'test': 'success' }); });
router.put('/report/:id', function (req, res) { res.json({ 'test': 'success' }); });
router.delete('/report/:id', function (req, res) { res.json({ 'test': 'success' }); });

module.exports = router;