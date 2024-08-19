const request = require('supertest');
const app = require('../index');

describe('User API', () => {
    it('should create a new user', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should fetch all users', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});

afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500)); // Avoid jest open handle error
});
