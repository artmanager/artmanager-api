var 	request = require('supertest'),
		assert 	= require('assert'),
		pg 		= require('../../db/postgres');

/*
describe.only('Postgres Endpoints', function(){
	it('Test Connection postgres', function(done){
		pg.connect(function(err) {
		  if(err) {
		    return console.error('could not connect to postgres', err);
		  }
		  pg.query('SELECT 123 AS "NumberTest"', function(err, result) {
		    if(err) {
		      return console.error('error running query', err);
		    }
		    assert.equal(result.rows[0].NumberTest, 123);
		    pg.end();
			done();

		  });
		});
	});
});*/