'use strict';

let forgotPasswordBus = require('../../domain/business/ForgotPasswordBUS.js');
let request = require('supertest'),
	btoa = require('btoa'),
	fs = require('fs'),
	ini = require('iniparser'),
	userDAO = require('../../domain/dao/UserDAO'),
	config = require('../../config/config.js'),
	common = require(config.common.fileCommon);

describe.only('ForgotPassword', function () {

    //it('Test BUS, test send e-mail', function (done) {
    //    let obj = {
    //        user: 'gustavo_sk@live.com'
    //    };
    //    forgotPasswordBus.SendEmail(obj, function (callback) {

    //        console.log('TESTE FIM');
            
    //        done();
    //    })
    //});

    it('Test Request, report sales, method: GET, url: /reportSales', function (done) {
        this.timeout(10000);
        let obj = {
            user: 'gustavo_sk@live.com'
        };

        request(config.application.url)
		.post(common.routes.forgotPassword.sendEmail)
		.send(obj)
		.set('Accept', 'application/json')
      	.expect('Content-Type', /json/)
      	.expect(200)
		.end(function (err, res) {

		    let callback = res.body;
		    console.log(callback);

		    if (callback.success != null) {
		        done();
		    }
		    else if (callback.error != null) {
		        done(callback.error);
		    }
		});
    });
});