var chai = require('chai') , chaiHttp = require('chai-http');
var expect = chai.expect;
var server;

chai.use(chaiHttp);
  beforeEach(function () {
      server = require('../server')
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
