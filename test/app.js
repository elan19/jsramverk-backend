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


    describe('POST /tickets', () => {
        it('200 POST TICKETS', (done) => {

            const ticketData = {
                code: '123515',
                trainnumber: '2525',
                traindate: '2023-09-14'
            };

            chai.request(server)
                .post("/tickets")
                .send(ticketData)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });


    describe('GET /tickets', () => {
        it('200 GET TICKETS', (done) => {
            chai.request(server)
                .get("/tickets")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data[0].should.have.property('trainnumber');
                    res.body.data[0].should.have.property('traindate');
                    done();
                });
        });
    });

});

module.exports = server;
