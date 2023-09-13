
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');

chai.should();

chai.use(chaiHttp);

describe('app', () => {
    describe('GET /user', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/user")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.have.property('msg');
                    done();
                });
        });
    });
});

module.exports = server;
