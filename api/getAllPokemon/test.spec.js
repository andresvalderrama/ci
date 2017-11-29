/* globals describe it */

const chai = require('chai')
const should = chai.should() // eslint-disable-line
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
describe('get all pokemon', () => {
  it('should return all pokemon in DB', done => {
    chai.request('http://localhost:3000')
      .get('/api/v1/pokemon')
      .end((err, res) => { // eslint-disable-line
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('result')
        res.body.result[0].should.have.property('id')
        res.body.result[0].should.have.property('name')
        done()
      })
  })
})
