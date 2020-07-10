const request = require('supertest');
const app = require('./../index');
const should = require('should');

//==================== location API test ====================

/**
 * Testing location with Quilmes Ip endpoint
 */
describe('GET /v1/location', function () {
    it('respond with json containing a location data', function (done) {
        request(app)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .set('X-Forwarded-For', '181.46.137.8')
            .expect('Content-Type', /json/)
            .end(function(err, res){
                res.should.have.property('status', 200);
                res.should.be.json;
                res.body.should.have.property('status', 'success');
                res.body.should.have.property('country', 'Argentina');
                res.body.should.have.property('countryCode','AR');
                res.body.should.have.property('regionName', 'Buenos Aires');
                res.body.should.have.property('city', 'Quilmes');
                res.body.should.have.property('zip','1878');
                res.body.should.have.property('lat');
                res.body.should.have.property('lon');
                res.body.should.have.property('timezone','America/Argentina/Buenos_Aires');
                res.body.should.have.property('isp');
                res.body.should.have.property('org');
                res.body.should.have.property('as');
                res.body.should.have.property('query','181.46.137.8');
                done();
            });
    });
});