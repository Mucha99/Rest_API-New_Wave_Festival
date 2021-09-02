const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server.js');
const Concert = require('../../../models/concerts.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;


describe('GET /api/search', () => {
    before (async () => {
        const testConcertOne = new Concert({
            _id: '5d9f1140f10a81216cfd4408',
            performer: 'Joda Obilan', 
            genre: 'K-pop', 
            day: 2, 
            price: 25, 
            image: 'image'
        });
        await testConcertOne.save();

        const testConcertTwo = new Concert({ 
            _id: '5d9f1140f10a81216cfd4448',
            performer: 'Alu Felga', 
            genre: 'Neofolk', 
            day: 2, 
            price: 255, 
            image: 'image'
        });
        await testConcertTwo.save();

        const testConcertThree = new Concert({ 
            _id: '5d9f1140f10a81216cfd4409',
            performer: 'Johny Lolek', 
            genre: 'K-pop', 
            day: 1, 
            price: 250, 
            image: 'image'
        });
        await testConcertThree.save();

    });

    it('/ should return concert with performer', async () => {
        const res = await request(server).get("/api/concerts/performer/Joda Obilan");
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.not.be.null;
    });
  
    it('/ should return concert with genre ', async () => {
        const res = await request(server).get('/api/concerts/genre/K-pop');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
    });
  
    it('/ should return concert with price by price_min / price_max', async () => {
        const res = await request(server).get('/api/concerts/price/220/260');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
    });

    it('/ should return concert with day ', async () => {
        const res = await request(server).get('/api/concerts/day/2');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
    });

    after(async () => {
        await Concert.deleteMany();
    });
});