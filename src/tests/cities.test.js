const request = require("supertest")
const app = require("../app");
const Cities = require("../models/Cities");

let cityId;
let data = {
    "name": "Valencia",
    "country": "Venezuela",
    "isCapital": false
}
test("GET /cities should return status 200", async() => {
    const res = await request(app).get("/cities");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
})

test("POST /cities should return status 201", async() => {
    const res = await request(app).post("/cities").send(data);
    cityId = res.body.id
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(data.name)
})

test("GET /cities/:id to getOne should return status 200", async() => {
    const res = await request(app).get(`/cities/${cityId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(data.name)
})

test("PUT /cities/:id should return status 201", async() => {
    const res = await request(app).put(`/cities/${cityId}`).send({"isCapital": true});
    expect(res.statusCode).toBe(200);
    expect(res.body.isCapital).toBe(true)
})

test("DELETE /cities/:id should return status 204", async() => {
    const res = await request(app).delete(`/cities/${cityId}`);
    expect(res.statusCode).toBe(204);
})


