import app from '../src/app';

import request = require("supertest");

describe('External API', () => {
    let propertyId: number;
    it('External Areas - should return all areas in nafplio', async () => {
        const res = await request(app)
            .get(`/api/external/areas?area=nafplio`)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(res.statusCode).toBe(200);
    });
});