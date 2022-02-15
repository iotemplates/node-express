var chai = require('chai') , chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);
 
var server;
beforeEach(function () {
    server = require('../server');
});

afterEach(function () {
    server.close();
});

describe('GET /', function() {
    it('should have body Hello World!', function() {
        chai.request(server).get('/').end( function(err, res) {
            expect(res.text).to.be.equal('Hello World!');
        }); 
    });
})
