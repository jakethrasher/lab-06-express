const { app } = require('../app.js');
//user supertest to make fake requests to our endpoints
const supertest = require('supertest');
const request = supertest(app);

const { records } = require('../data.js');

it('should return the array of records', async done => {

    const response = await request.get('/records');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        results: records
    });
    done();
});

it('should get the selected record', async done => {

    const response = await request.get('/records/1');
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        results: {
            id: 1,
            artist: '4hero',
            album: 'Parallel Universe',
            image: '4hero.png',
            condition: 'Near Mint',
            genre: "90's electronic",
            price: 25
        }
    });
    done();
});

