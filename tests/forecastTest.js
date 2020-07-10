const request = require('supertest');
const app = require('./../index');

//==================== location API test ====================

/**
 * Testing forecast with city empty endpoint
 */
describe('GET /v1/forecast', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/forecast')
            .set('Accept', 'application/json')
            .set('X-Forwarded-For', '181.46.137.8')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});



//==================== location API test ====================

/**
 * Testing forecast with city Quilmes endpoint
 */
describe('GET /v1/forecast/Quilmes', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/forecast/Quilmes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});



//==================== location API test ====================

/**
 * Testing forecast with city Avellaneda endpoint
 */
describe('GET /v1/forecast/Avellaneda', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/forecast/Avellaneda')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});