const request = require('supertest');
const app = require('../index');

describe('Product API', () => {
    it('should create a new product', async () => {
        const response = await request(app)
            .post('/api/products')
            .send({
                name: 'Test Product',
                price: 99.99,
                stock: 10
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should fetch all products', async () => {
        const response = await request(app).get('/api/products');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
