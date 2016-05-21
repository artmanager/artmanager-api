'use strict';
let request     = require('supertest'),
    reportDAO   = require('../../domain/dao/ReportDAO.js'),
    reportBUS   = require('../../domain/business/ReportBUS.js'),
    config      = require('../../config/config.js'),
    common      = require(config.common.fileCommon),
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6ImFydG1hbmFnZXIiLCJwcm9maWxlIjpudWxsLCJpYXQiOjE0NjM4MDkxMzh9.iDzAFzab9fZq7-O1vEMMbihZ9zfZGP044SqacGRuWG0";

describe.only('Report', function () {

    it('Test DAO, report products, method: ReportProduct', function (done) {
        var obj = {
            dt_from: '2016-05-01',
            dt_to: '2016-05-17'
        }

        reportDAO.ReportProducts(obj, function (callback) {
            
            if (callback.result != null && callback.result.length > 0) {
                done();
            }
            if (callback.result != null && callback.result.length <= 0) {
                done('Nenum produto foi vendido');
            }

        });
    });

    it('Test BUS, report products, method Reportproduct', function (done) {
        var obj = {
            dt_from: '2016-05-01',
            dt_to: '2016-05-17'
        };

        reportBUS.ReportProducts(obj, function (callback) {
            
            if (callback.success != null) {
                done();
            }
            else if (callback.error != null) {
                done(calback.error);
            }
           
        });
    });

    it('Test Request, report products, method: GET, url: /reportProduct ', function (done) {
        let obj = {
            dt_from: '2016-05-01',
            dt_to: '2016-05-17'
        };
            
        request(config.application.url)
		.get(common.routes.report.getReportProduct)
		.send(obj)
		.set('Accept', 'application/json')
        .set('x-access-token', token)
      	.expect('Content-Type', /json/)
      	.expect(200)
		.end(function (err, res) {

		    let callback = res.body;
		    console.log(callback);

		    if (callback.success != null) {
		        done();
		    }
		    else if (callback.error != null) {
		        done(calback.error);
		    }

		});    
    });
});
