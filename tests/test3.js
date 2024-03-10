const chai = require('chai');
const chaiHttp = require('chai-http');
const server = 'https://panda-s.azurewebsites.net/';
chai.use(chaiHttp);
const expect = chai.expect;


describe('Add shoe to cart', function() {
    it('Should add a shoe to the cart', function(done) {
      const buyerId = '107984540711114161408'; // replace with actual buyerId
      const shoeId = '2222'; // replace with actual shoeId
  
      chai.request(server)
        .post(`app/buyersTesting/${buyerId}/cart/${shoeId}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });