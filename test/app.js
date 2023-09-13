/* global it describe */

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


    describe('GET /tickets', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/tickets")
                .end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    console.log(res.body.data[0]);
                    res.body.data[0].should.have.property('trainnumber');
                    res.body.data[0].should.have.property('traindate');

                    done();
                });
        });
    });

});

module.exports = server;
