'use strict';
let request     = require('supertest'),
    reportDAO   = require('../../domain/dao/ReportDAO.js'),
    reportBUS   = require('../../domain/business/ReportBUS.js'),
    config      = require('../../config/config.js'),
    common      = require(config.common.fileCommon),
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6ImFydG1hbmFnZXIiLCJwcm9maWxlIjpudWxsLCJpYXQiOjE0NjM4MDkxMzh9.iDzAFzab9fZq7-O1vEMMbihZ9zfZGP044SqacGRuWG0";

describe.only('Report', function () {

    //DAO
    //it('Test DAO, report products, method: ReportProduct', function (done) {
    //    var obj = {
    //        dt_from: '2016-05-01',
    //        dt_to: '2016-05-17'
    //    }

    //    reportDAO.ReportProducts(obj, function (callback) {
            
    //        if (callback.result != null && callback.result.length > 0) {
    //            console.log(callback.result);
    //            done();
    //        } else if (callback.result != null && callback.result.length <= 0) {
    //            done('Nenum produto foi vendido');
    //        }

    //    });
    //});

    //it('Test DAO, report supplier, method ReportSupplier', function (done) {
    //    let obj = {
    //        dt_from: '2011-05-01',
    //        dt_to: '2016-05-30'
    //    }

    //    reportDAO.ReportSupplier(obj, function (callback) {
    //        if (callback.result != null && callback.result.length > 0) {
    //            console.log(callback.result);
    //            done();
    //        } else if (callback.result != null && callback.result.length <= 0) {
    //            return done("Nenhum produto foi vendido");
    //        } else {
    //            return done('Unexpected result');
    //        }

    //    });
    //});

    //it('Test DAO, report sales, method ReportSales', function (done) {
    //    let obj = {
    //        dt_from: '2011-05-01',
    //        dt_to: '2016-05-30'
    //    }

    //    reportDAO.ReportSales(obj, function (callback) {
    //        if (callback.result != null && callback.result.length > 0) {
    //            console.log(callback.result);
    //            done();
    //        } else if (callback.result != null && callback.result.length <= 0) {
    //            return done("Nenhum produto foi vendido");
    //        } else {
    //            return done('Unexpected result');
    //        }

    //    });
    //});

    ////BUS
    //it('Test BUS, report supplier, method ReporSupplier', function (done) {
    //    let obj = {
    //        dt_from: '2000-05-01',
    //        dt_to: '2016-05-30'
    //    }

    //    reportBUS.ReportSupplier(obj, function (callback) {

    //        callback.success.forEach(function (o) {
    //            console.log(o);
    //        });

    //        done();
    //    });
    //});

    //it('Test BUS, report products, method Reportproduct', function (done) {
    //    var obj = {
    //        dt_from: '2016-05-01',
    //        dt_to: '2016-05-17'
    //    };

    //    reportBUS.ReportProducts(obj, function (callback) {
            
    //        if (callback.success != null) {
    //            done();
    //        }
    //        else if (callback.error != null) {
    //            done(calback.error);
    //        }
           
    //    });
    //});
    
    it('Test BUS, report products, method Reportproduct', function (done) {
       var obj = {
           dt_from: '26-01-2016',
           dt_to: '11-06-2016'
       };

       reportBUS.RerportTimeProductsToDay(obj, function (callback) {
            
           if (callback.success != null) {
               done();
           }
           else if (callback.error != null) {
               done(calback.error);
           }
           
       });
    });

    //Request
    // it('Test Request, report supplier, method GET, url: /reportSupplier', function (done) {
    //     let obj = {
    //         dt_from: '1970-01-01',
    //         dt_to: '2016-06-10'
    //     }
        
    //     request(config.application.url)
    //     .post(common.routes.report.getReportSupplier)
    //     .send(obj)
    //     .set('Accept', 'application/json')
    //     .set('x-access-token', token)
    //     .expect('Content-Type', /json/)
    //     .expect(200)
    //     .end(function (err, res) {
    //         let callback = res.body;
    //         console.log(callback);

    //         if (callback.success != null) {
    //         	done();
    //         }
    //         else if (callback.error != null) {
    //         	done(calback.error);
    //         }
    //     });

    // });

    //it('Test Request, report products, method: GET, url: /reportProduct ', function (done) {
    //    let obj = {
    //        dt_from: '2016-05-01',
    //        dt_to: '2016-05-17'
    //    };
            
    //    request(config.application.url)
	//	.get(common.routes.report.getReportProduct)
	//	.send(obj)
	//	.set('Accept', 'application/json')
    //    .set('x-access-token', token)
    //  	.expect('Content-Type', /json/)
    //  	.expect(200)
	//	.end(function (err, res) {

	//	    let callback = res.body;
	//	    console.log(callback);

	//	    if (callback.success != null) {
	//	        done();
	//	    }
	//	    else if (callback.error != null) {
	//	        done(calback.error);
	//	    }

	//	});    
    //});

    //it('Test Request, report sales, method: GET, url: /reportSales', function (done) {
    //    let obj = {
    //        dt_from: '2016-05-01',
    //        dt_to: '2016-05-17'
    //    };

    //    request(config.application.url)
	//	.post(common.routes.report.getReportSales)
	//	.send(obj)
	//	.set('Accept', 'application/json')
    //    .set('x-access-token', token)
    //  	.expect('Content-Type', /json/)
    //  	.expect(200)
	//	.end(function (err, res) {

	//	    let callback = res.body;
	//	    console.log(callback);

	//	    if (callback.success != null) {
	//	        done();
	//	    }
	//	    else if (callback.error != null) {
	//	        done(calback.error);
	//	    }
	//	});
    //});
});
