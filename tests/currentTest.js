const request = require('supertest');
const app = require('./../index');

//==================== current with city empty API test ====================

/**
 * Testing current with city empty endpoint
 */
describe('GET /v1/current', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/current')
            .set('Accept', 'application/json')
            .set('X-Forwarded-For', '181.46.137.8')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

//==================== current with city Quilmes API test ====================

/**
 * Testing current with city Quilmes endpoint
 */
describe('GET /v1/current/Quilmes', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/current/Quilmes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});