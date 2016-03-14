var request 		= require('supertest'),
	comissionDAO 	= require('../../domain/dao/CommissionDAO');


describe.only('Comission', function () {

	it ('Test DAO, insert one comission', function (done){
		comissionDAO.Hello();

		done();
	});
});