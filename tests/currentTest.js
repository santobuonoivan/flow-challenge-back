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
            .end(function(err, res){
                res.should.have.property('status', 200);
                res.should.be.json;

                res.body.should.be.instanceof(Object);
                res.body.should.have.property('cod', 200).and.be.instanceof(Number);
                res.body.should.have.property('name', 'Quilmes').and.be.instanceof(String);

                res.body.should.have.property('coord');
                res.body.coord.should.be.instanceof(Object);
                res.body.coord.should.have.property('lon').and.be.instanceof(Number);
                res.body.coord.should.have.property('lat').and.be.instanceof(Number);

                res.body.should.have.property('weather');
                res.body.weather.should.be.instanceof(Array).and.have.lengthOf(1);
                res.body.weather[0].should.have.property('id').and.be.instanceof(Number);
                res.body.weather[0].should.have.property('main').and.be.instanceof(String);
                res.body.weather[0].should.have.property('description').and.be.instanceof(String);
                res.body.weather[0].should.have.property('icon').and.be.instanceof(String);
                res.body.should.have.property('base').and.be.instanceof(String);

                res.body.should.have.property('main');
                res.body.main.should.be.instanceof(Object);
                res.body.main.should.have.property('temp').and.be.instanceof(Number);
                res.body.main.should.have.property('feels_like').and.be.instanceof(Number);
                res.body.main.should.have.property('temp_min').and.be.instanceof(Number);
                res.body.main.should.have.property('temp_max').and.be.instanceof(Number);
                res.body.main.should.have.property('pressure').and.be.instanceof(Number);
                res.body.main.should.have.property('humidity').and.be.instanceof(Number);

                res.body.should.have.property('visibility').and.be.instanceof(Number);

                res.body.should.have.property('wind');
                res.body.wind.should.be.instanceof(Object);
                res.body.wind.should.have.property('speed').and.be.instanceof(Number);
                res.body.wind.should.have.property('deg').and.be.instanceof(Number);

                res.body.should.have.property('clouds');
                res.body.clouds.should.be.instanceof(Object);
                res.body.clouds.should.have.property('all').and.be.instanceof(Number);

                res.body.should.have.property('dt').and.be.instanceof(Number);

                res.body.should.have.property('sys');
                res.body.sys.should.be.instanceof(Object);
                res.body.sys.should.have.property('type').and.be.instanceof(Number);
                res.body.sys.should.have.property('id').and.be.instanceof(Number);
                res.body.sys.should.have.property('country').and.be.instanceof(String);
                res.body.sys.should.have.property('sunrise').and.be.instanceof(Number);
                res.body.sys.should.have.property('sunset').and.be.instanceof(Number);

                res.body.should.have.property('timezone').and.be.instanceof(Number);
                res.body.should.have.property('id').and.be.instanceof(Number);
                done();
            });
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
            .end(function(err, res){
                res.should.have.property('status', 200);
                res.should.be.json;

                res.body.should.be.instanceof(Object);
                res.body.should.have.property('cod', 200).and.be.instanceof(Number);
                res.body.should.have.property('name', 'Quilmes').and.be.instanceof(String);

                res.body.should.have.property('coord');
                res.body.coord.should.be.instanceof(Object);
                res.body.coord.should.have.property('lon').and.be.instanceof(Number);
                res.body.coord.should.have.property('lat').and.be.instanceof(Number);

                res.body.should.have.property('weather');
                res.body.weather.should.be.instanceof(Array).and.have.lengthOf(1);
                res.body.weather[0].should.have.property('id').and.be.instanceof(Number);
                res.body.weather[0].should.have.property('main').and.be.instanceof(String);
                res.body.weather[0].should.have.property('description').and.be.instanceof(String);
                res.body.weather[0].should.have.property('icon').and.be.instanceof(String);
                res.body.should.have.property('base').and.be.instanceof(String);

                res.body.should.have.property('main');
                res.body.main.should.be.instanceof(Object);
                res.body.main.should.have.property('temp').and.be.instanceof(Number);
                res.body.main.should.have.property('feels_like').and.be.instanceof(Number);
                res.body.main.should.have.property('temp_min').and.be.instanceof(Number);
                res.body.main.should.have.property('temp_max').and.be.instanceof(Number);
                res.body.main.should.have.property('pressure').and.be.instanceof(Number);
                res.body.main.should.have.property('humidity').and.be.instanceof(Number);

                res.body.should.have.property('visibility').and.be.instanceof(Number);

                res.body.should.have.property('wind');
                res.body.wind.should.be.instanceof(Object);
                res.body.wind.should.have.property('speed').and.be.instanceof(Number);
                res.body.wind.should.have.property('deg').and.be.instanceof(Number);

                res.body.should.have.property('clouds');
                res.body.clouds.should.be.instanceof(Object);
                res.body.clouds.should.have.property('all').and.be.instanceof(Number);

                res.body.should.have.property('dt').and.be.instanceof(Number);

                res.body.should.have.property('sys');
                res.body.sys.should.be.instanceof(Object);
                res.body.sys.should.have.property('type').and.be.instanceof(Number);
                res.body.sys.should.have.property('id').and.be.instanceof(Number);
                res.body.sys.should.have.property('country').and.be.instanceof(String);
                res.body.sys.should.have.property('sunrise').and.be.instanceof(Number);
                res.body.sys.should.have.property('sunset').and.be.instanceof(Number);

                res.body.should.have.property('timezone').and.be.instanceof(Number);
                res.body.should.have.property('id').and.be.instanceof(Number);
                done();
            });
    });
});


//==================== current with city Avellaneda API test ====================

/**
 * Testing current with city Avellaneda endpoint
 */
describe('GET /v1/current/Avellaneda', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/current/Avellaneda')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res){
                res.should.have.property('status', 200);
                res.should.be.json;

                res.body.should.be.instanceof(Object);
                res.body.should.have.property('cod', 200).and.be.instanceof(Number);
                res.body.should.have.property('name', 'Avellaneda').and.be.instanceof(String);

                res.body.should.have.property('coord');
                res.body.coord.should.be.instanceof(Object);
                res.body.coord.should.have.property('lon').and.be.instanceof(Number);
                res.body.coord.should.have.property('lat').and.be.instanceof(Number);

                res.body.should.have.property('weather');
                res.body.weather.should.be.instanceof(Array).and.have.lengthOf(1);
                res.body.weather[0].should.have.property('id').and.be.instanceof(Number);
                res.body.weather[0].should.have.property('main').and.be.instanceof(String);
                res.body.weather[0].should.have.property('description').and.be.instanceof(String);
                res.body.weather[0].should.have.property('icon').and.be.instanceof(String);
                res.body.should.have.property('base').and.be.instanceof(String);

                res.body.should.have.property('main');
                res.body.main.should.be.instanceof(Object);
                res.body.main.should.have.property('temp').and.be.instanceof(Number);
                res.body.main.should.have.property('feels_like').and.be.instanceof(Number);
                res.body.main.should.have.property('temp_min').and.be.instanceof(Number);
                res.body.main.should.have.property('temp_max').and.be.instanceof(Number);
                res.body.main.should.have.property('pressure').and.be.instanceof(Number);
                res.body.main.should.have.property('humidity').and.be.instanceof(Number);

                //res.body.should.have.property('visibility').and.be.instanceof(Number);

                res.body.should.have.property('wind');
                res.body.wind.should.be.instanceof(Object);
                res.body.wind.should.have.property('speed').and.be.instanceof(Number);
                res.body.wind.should.have.property('deg').and.be.instanceof(Number);

                res.body.should.have.property('clouds');
                res.body.clouds.should.be.instanceof(Object);
                res.body.clouds.should.have.property('all').and.be.instanceof(Number);

                res.body.should.have.property('dt').and.be.instanceof(Number);

                res.body.should.have.property('sys');
                res.body.sys.should.be.instanceof(Object);

                //res.body.sys.should.have.property('type').and.be.instanceof(Number);
                //res.body.sys.should.have.property('id').and.be.instanceof(Number);

                res.body.sys.should.have.property('country').and.be.instanceof(String);
                res.body.sys.should.have.property('sunrise').and.be.instanceof(Number);
                res.body.sys.should.have.property('sunset').and.be.instanceof(Number);

                res.body.should.have.property('timezone').and.be.instanceof(Number);
                res.body.should.have.property('id').and.be.instanceof(Number);
                done();
            });
    });
});

//==================== current with city Bernal API test ====================

/**
 * Testing current with city Bernal endpoint
 */
describe('GET /v1/current/Bernal', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/current/Bernal')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res){
                res.should.have.property('status', 200);
                res.should.be.json;

                res.body.should.be.instanceof(Object);
                res.body.should.have.property('cod', 200).and.be.instanceof(Number);
                res.body.should.have.property('name', 'Bernal').and.be.instanceof(String);

                res.body.should.have.property('coord');
                res.body.coord.should.be.instanceof(Object);
                res.body.coord.should.have.property('lon').and.be.instanceof(Number);
                res.body.coord.should.have.property('lat').and.be.instanceof(Number);

                res.body.should.have.property('weather');
                res.body.weather.should.be.instanceof(Array).and.have.lengthOf(1);
                res.body.weather[0].should.have.property('id').and.be.instanceof(Number);
                res.body.weather[0].should.have.property('main').and.be.instanceof(String);
                res.body.weather[0].should.have.property('description').and.be.instanceof(String);
                res.body.weather[0].should.have.property('icon').and.be.instanceof(String);
                res.body.should.have.property('base').and.be.instanceof(String);

                res.body.should.have.property('main');
                res.body.main.should.be.instanceof(Object);
                res.body.main.should.have.property('temp').and.be.instanceof(Number);
                res.body.main.should.have.property('feels_like').and.be.instanceof(Number);
                res.body.main.should.have.property('temp_min').and.be.instanceof(Number);
                res.body.main.should.have.property('temp_max').and.be.instanceof(Number);
                res.body.main.should.have.property('pressure').and.be.instanceof(Number);
                res.body.main.should.have.property('humidity').and.be.instanceof(Number);

                //res.body.should.have.property('visibility').and.be.instanceof(Number);

                res.body.should.have.property('wind');
                res.body.wind.should.be.instanceof(Object);
                res.body.wind.should.have.property('speed').and.be.instanceof(Number);
                res.body.wind.should.have.property('deg').and.be.instanceof(Number);

                res.body.should.have.property('clouds');
                res.body.clouds.should.be.instanceof(Object);
                res.body.clouds.should.have.property('all').and.be.instanceof(Number);

                res.body.should.have.property('dt').and.be.instanceof(Number);

                res.body.should.have.property('sys');
                res.body.sys.should.be.instanceof(Object);

                //res.body.sys.should.have.property('type').and.be.instanceof(Number);
                //res.body.sys.should.have.property('id').and.be.instanceof(Number);

                res.body.sys.should.have.property('country').and.be.instanceof(String);
                res.body.sys.should.have.property('sunrise').and.be.instanceof(Number);
                res.body.sys.should.have.property('sunset').and.be.instanceof(Number);

                res.body.should.have.property('timezone').and.be.instanceof(Number);
                res.body.should.have.property('id').and.be.instanceof(Number);
                done();
            });
    });
});


//==================== current with fake Qwerty city API test ====================

/**
 * Testing current with fake Qwerty city endpoint
 */
describe('GET /v1/current/Qwerty', function () {
    it('respond with json containing a error message', function (done) {
        request(app)
            .get('/v1/current/Qwerty')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res){
                res.should.have.property('status', 400);
                res.should.be.json;

                res.body.should.be.instanceof(Object);
                res.body.should.have.property('message').and.be.instanceof(String);

                done();
            });
    });
});