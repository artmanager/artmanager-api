'use strict';
let request = require('supertest');
let reportDAO = require('../../domain/dao/ReportDAO.js');


describe.only('Report', function () {
    it('Test DAO, report products, method: ReportProduct', function (done) {
        var obj = {
            dt_from: '2016-05-01',
            dt_to: '2016-05-17'
        }

        reportDAO.ReportProducts(obj, function (callback) {
            console.log(callback);
            done();
        });
    });
});
