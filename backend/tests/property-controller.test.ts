import app from '../src/app';
// @ts-ignore
import request from "supertest"

describe('GET /api/properties', () => {
  it('should return all properties', async () => {
    const res = await request(app)
      .get('/api/properties')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /api/properties/:id', () => {
  it('should return found property', async () => {
    const res = await request(app)
      .get('/api/properties/8')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.statusCode).toBe(200);
  });
});