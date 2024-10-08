const request = require('supertest');
const app = require('../index');

describe('Product API', () => {
    it('should create a new product', async () => {
        const response = await request(app)
            .post('/products')
            .send({
                name: 'Test Product',
                description: 'Testing the product',
                price: 99.99,
                stock: 10
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should fetch all products', async () => {
        const response = await request(app).get('/products');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});

afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
});
