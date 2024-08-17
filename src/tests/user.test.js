const request = require('supertest');
const app = require('../index'); // Ensure this is at the top of your file

describe('User API', () => {
    // Example test case: Ensure the user creation works
    it('should create a new user', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    // Example test case: Ensure fetching users works
    it('should fetch all users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});

// Ensure the test cases are isolated and do not interfere with each other
afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500)); // Avoid jest open handle error
});
