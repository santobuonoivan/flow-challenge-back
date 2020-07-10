const request = require('supertest');
const app = require('./../index');

//==================== forecast API test ====================

/**
 * Testing forecast with empty city endpoint
 */
describe('GET /v1/forecast', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/forecast')
            .set('Accept', 'application/json')
            .set('X-Forwarded-For', '181.46.137.8')
            .expect('Content-Type', /json/)
            .end(function(err, res){
                res.should.have.property('status', 200);
                res.should.be.json;

                res.body.should.be.instanceof(Object);
                res.body.should.have.property('cod', "200").and.be.instanceof(String);
                res.body.should.have.property('message').and.be.instanceof(Number);
                res.body.should.have.property('cnt').and.be.instanceof(Number);

                res.body.should.have.property('list');
                res.body.list.should.be.instanceof(Array).and.have.lengthOf(40);
                res.body.list[0].should.have.property('dt').and.be.instanceof(Number);

                res.body.list[0].should.have.property('main').and.be.instanceof(Object);
                res.body.list[0].main.should.have.property('temp').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('feels_like').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_min').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_max').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('pressure').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('sea_level').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('grnd_level').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('humidity').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_kf').and.be.instanceof(Number);

                res.body.list[0].should.have.property('weather').and.be.instanceof(Array).and.have.lengthOf(1);
                res.body.list[0].weather[0].should.have.property('id').and.be.instanceof(Number);
                res.body.list[0].weather[0].should.have.property('main').and.be.instanceof(String);
                res.body.list[0].weather[0].should.have.property('description').and.be.instanceof(String);
                res.body.list[0].weather[0].should.have.property('icon').and.be.instanceof(String);

                res.body.list[0].should.have.property('clouds').and.be.instanceof(Object);
                res.body.list[0].clouds.should.have.property('all').and.be.instanceof(Number);

                res.body.list[0].should.have.property('wind').and.be.instanceof(Object);
                res.body.list[0].wind.should.have.property('speed').and.be.instanceof(Number);
                res.body.list[0].wind.should.have.property('deg').and.be.instanceof(Number);

                res.body.list[0].should.have.property('sys').and.be.instanceof(Object);
                res.body.list[0].sys.should.have.property('pod').and.be.instanceof(String);

                res.body.list[0].should.have.property('dt_txt').and.be.instanceof(String);

                res.body.should.have.property('city').and.be.instanceof(Object);
                res.body.city.should.have.property('id').and.be.instanceof(Number);
                res.body.city.should.have.property('name','Quilmes').and.be.instanceof(String);
                res.body.city.should.have.property('coord').and.be.instanceof(Object);
                res.body.city.coord.should.have.property('lat').and.be.instanceof(Number);
                res.body.city.coord.should.have.property('lon').and.be.instanceof(Number);
                res.body.city.should.have.property('country').and.be.instanceof(String);
                res.body.city.should.have.property('population').and.be.instanceof(Number);
                res.body.city.should.have.property('timezone').and.be.instanceof(Number);
                res.body.city.should.have.property('sunrise').and.be.instanceof(Number);
                res.body.city.should.have.property('sunset').and.be.instanceof(Number);

                done();
            });
    });
});


/**
 * Testing forecast with city Quilmes endpoint
 */

describe('GET /v1/forecast/Quilmes', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/forecast/Quilmes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res){
                res.should.have.property('status', 200);
                res.should.be.json;

                res.body.should.be.instanceof(Object);
                res.body.should.have.property('cod', "200").and.be.instanceof(String);
                res.body.should.have.property('message').and.be.instanceof(Number);
                res.body.should.have.property('cnt').and.be.instanceof(Number);

                res.body.should.have.property('list');
                res.body.list.should.be.instanceof(Array).and.have.lengthOf(40);
                res.body.list[0].should.have.property('dt').and.be.instanceof(Number);

                res.body.list[0].should.have.property('main').and.be.instanceof(Object);
                res.body.list[0].main.should.have.property('temp').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('feels_like').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_min').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_max').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('pressure').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('sea_level').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('grnd_level').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('humidity').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_kf').and.be.instanceof(Number);

                res.body.list[0].should.have.property('weather').and.be.instanceof(Array).and.have.lengthOf(1);
                res.body.list[0].weather[0].should.have.property('id').and.be.instanceof(Number);
                res.body.list[0].weather[0].should.have.property('main').and.be.instanceof(String);
                res.body.list[0].weather[0].should.have.property('description').and.be.instanceof(String);
                res.body.list[0].weather[0].should.have.property('icon').and.be.instanceof(String);

                res.body.list[0].should.have.property('clouds').and.be.instanceof(Object);
                res.body.list[0].clouds.should.have.property('all').and.be.instanceof(Number);

                res.body.list[0].should.have.property('wind').and.be.instanceof(Object);
                res.body.list[0].wind.should.have.property('speed').and.be.instanceof(Number);
                res.body.list[0].wind.should.have.property('deg').and.be.instanceof(Number);

                res.body.list[0].should.have.property('sys').and.be.instanceof(Object);
                res.body.list[0].sys.should.have.property('pod').and.be.instanceof(String);

                res.body.list[0].should.have.property('dt_txt').and.be.instanceof(String);

                res.body.should.have.property('city').and.be.instanceof(Object);
                res.body.city.should.have.property('id').and.be.instanceof(Number);
                res.body.city.should.have.property('name','Quilmes').and.be.instanceof(String);
                res.body.city.should.have.property('coord').and.be.instanceof(Object);
                res.body.city.coord.should.have.property('lat').and.be.instanceof(Number);
                res.body.city.coord.should.have.property('lon').and.be.instanceof(Number);
                res.body.city.should.have.property('country').and.be.instanceof(String);
                res.body.city.should.have.property('population').and.be.instanceof(Number);
                res.body.city.should.have.property('timezone').and.be.instanceof(Number);
                res.body.city.should.have.property('sunrise').and.be.instanceof(Number);
                res.body.city.should.have.property('sunset').and.be.instanceof(Number);

                done();
            });
    });
});


/**
 * Testing forecast with city Avellaneda endpoint
 */

describe('GET /v1/forecast/Avellaneda', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/forecast/Avellaneda')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res){
                res.should.have.property('status', 200);
                res.should.be.json;

                res.body.should.be.instanceof(Object);
                res.body.should.have.property('cod', "200").and.be.instanceof(String);
                res.body.should.have.property('message').and.be.instanceof(Number);
                res.body.should.have.property('cnt').and.be.instanceof(Number);

                res.body.should.have.property('list');
                res.body.list.should.be.instanceof(Array).and.have.lengthOf(40);
                res.body.list[0].should.have.property('dt').and.be.instanceof(Number);

                res.body.list[0].should.have.property('main').and.be.instanceof(Object);
                res.body.list[0].main.should.have.property('temp').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('feels_like').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_min').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_max').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('pressure').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('sea_level').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('grnd_level').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('humidity').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_kf').and.be.instanceof(Number);

                res.body.list[0].should.have.property('weather').and.be.instanceof(Array).and.have.lengthOf(1);
                res.body.list[0].weather[0].should.have.property('id').and.be.instanceof(Number);
                res.body.list[0].weather[0].should.have.property('main').and.be.instanceof(String);
                res.body.list[0].weather[0].should.have.property('description').and.be.instanceof(String);
                res.body.list[0].weather[0].should.have.property('icon').and.be.instanceof(String);

                res.body.list[0].should.have.property('clouds').and.be.instanceof(Object);
                res.body.list[0].clouds.should.have.property('all').and.be.instanceof(Number);

                res.body.list[0].should.have.property('wind').and.be.instanceof(Object);
                res.body.list[0].wind.should.have.property('speed').and.be.instanceof(Number);
                res.body.list[0].wind.should.have.property('deg').and.be.instanceof(Number);

                res.body.list[0].should.have.property('sys').and.be.instanceof(Object);
                res.body.list[0].sys.should.have.property('pod').and.be.instanceof(String);

                res.body.list[0].should.have.property('dt_txt').and.be.instanceof(String);

                res.body.should.have.property('city').and.be.instanceof(Object);
                res.body.city.should.have.property('id').and.be.instanceof(Number);
                res.body.city.should.have.property('name','Avellaneda').and.be.instanceof(String);
                res.body.city.should.have.property('coord').and.be.instanceof(Object);
                res.body.city.coord.should.have.property('lat').and.be.instanceof(Number);
                res.body.city.coord.should.have.property('lon').and.be.instanceof(Number);
                res.body.city.should.have.property('country').and.be.instanceof(String);
                res.body.city.should.have.property('population').and.be.instanceof(Number);
                res.body.city.should.have.property('timezone').and.be.instanceof(Number);
                res.body.city.should.have.property('sunrise').and.be.instanceof(Number);
                res.body.city.should.have.property('sunset').and.be.instanceof(Number);

                done();
            });
    });
});

/**
 * Testing forecast with city Bernal endpoint
 */

describe('GET /v1/forecast/Bernal', function () {
    it('respond with json containing a current data', function (done) {
        request(app)
            .get('/v1/forecast/Bernal')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res){
                res.should.have.property('status', 200);
                res.should.be.json;

                res.body.should.be.instanceof(Object);
                res.body.should.have.property('cod', "200").and.be.instanceof(String);
                res.body.should.have.property('message').and.be.instanceof(Number);
                res.body.should.have.property('cnt').and.be.instanceof(Number);

                res.body.should.have.property('list');
                res.body.list.should.be.instanceof(Array).and.have.lengthOf(40);
                res.body.list[0].should.have.property('dt').and.be.instanceof(Number);

                res.body.list[0].should.have.property('main').and.be.instanceof(Object);
                res.body.list[0].main.should.have.property('temp').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('feels_like').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_min').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_max').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('pressure').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('sea_level').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('grnd_level').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('humidity').and.be.instanceof(Number);
                res.body.list[0].main.should.have.property('temp_kf').and.be.instanceof(Number);

                res.body.list[0].should.have.property('weather').and.be.instanceof(Array).and.have.lengthOf(1);
                res.body.list[0].weather[0].should.have.property('id').and.be.instanceof(Number);
                res.body.list[0].weather[0].should.have.property('main').and.be.instanceof(String);
                res.body.list[0].weather[0].should.have.property('description').and.be.instanceof(String);
                res.body.list[0].weather[0].should.have.property('icon').and.be.instanceof(String);

                res.body.list[0].should.have.property('clouds').and.be.instanceof(Object);
                res.body.list[0].clouds.should.have.property('all').and.be.instanceof(Number);

                res.body.list[0].should.have.property('wind').and.be.instanceof(Object);
                res.body.list[0].wind.should.have.property('speed').and.be.instanceof(Number);
                res.body.list[0].wind.should.have.property('deg').and.be.instanceof(Number);

                res.body.list[0].should.have.property('sys').and.be.instanceof(Object);
                res.body.list[0].sys.should.have.property('pod').and.be.instanceof(String);

                res.body.list[0].should.have.property('dt_txt').and.be.instanceof(String);

                res.body.should.have.property('city').and.be.instanceof(Object);
                res.body.city.should.have.property('id').and.be.instanceof(Number);
                res.body.city.should.have.property('name','Bernal').and.be.instanceof(String);
                res.body.city.should.have.property('coord').and.be.instanceof(Object);
                res.body.city.coord.should.have.property('lat').and.be.instanceof(Number);
                res.body.city.coord.should.have.property('lon').and.be.instanceof(Number);
                res.body.city.should.have.property('country').and.be.instanceof(String);
                res.body.city.should.have.property('population').and.be.instanceof(Number);
                res.body.city.should.have.property('timezone').and.be.instanceof(Number);
                res.body.city.should.have.property('sunrise').and.be.instanceof(Number);
                res.body.city.should.have.property('sunset').and.be.instanceof(Number);

                done();
            });
    });
});


/**
 * Testing forecast with fake Qwerty city endpoint
 */

describe('GET /v1/forecast/Qwerty', function () {
    it('respond with json containing a error message', function (done) {
        request(app)
            .get('/v1/forecast/Qwerty')
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