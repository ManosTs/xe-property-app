import app from '../src/app';

import request = require("supertest");

describe('Property API', () => {
    let propertyId: number;
    it('GET ALL - should return all properties', async () => {
        const res = await request(app)
            .get('/api/properties')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(res.statusCode).toBe(200);
    });
    
    it("POST - should create a new property ad", async () => {
        const res = await request(app)
            .post("/api/properties")
            .send({
                type: 1,
                title: "new property",
                price: 222,
                placeId: 'test',
                typeDescription: "test description",
                placeDescription: "test description",
            });
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("id");
        
        propertyId = res.body.id;
    });
    
    it('GET BY ID - should return found property', async () => {
        const res = await request(app)
            .get(`/api/properties/${propertyId}`)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(res.statusCode).toBe(200);
    });
    
    it("PUT - should update an existing property ad", async () => {
        const res = await request(app)
            .put(`/api/properties/${propertyId}`)
            .send({
                id: propertyId,
                type: 2,
                title: "new property",
                price: 222,
                placeId: 'test',
                typeDescription: "test description2",
                placeDescription: "test description",
            });
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("id");
    });
    
    it('DELETE - should delete an existing property', async () => {
        const res = await request(app)
            .delete(`/api/properties/${propertyId}`)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(res.statusCode).toBe(200);
    });
});