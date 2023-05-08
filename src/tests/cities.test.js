const request = require("supertest")
const app = require("../app");
const Cities = require("../models/Cities");


test("test get /cities should return status 200", async() => {
    const res = await request(app).get("/cities");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
})

test("test post /cities should return status 201", async() => {
    const data = {
        "name": "Valencia",
        "country": "Venezuela",
        "isCapital": false
    }
    const res = await request(app).post("/cities").send(data);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(data.name)
})

test("test put /cities/:id should return status 201", async() => {
    const data = {
        "name": "San Felipe",
        "country": "Venezuela",
        "isCapital": true
    }
    const res = await request(app).put("/cities/1").send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.isCapital).toBe(data.isCapital)
})

test("test getone /cities/:id should return status 200", async() => {
    const res = await request(app).get("/cities/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
        "name": "San Felipe",
        "country": "Venezuela",
        "isCapital": true
    });
})

test("test delete /cities/:id should return status 204", async() => {
    const res = await request(app).delete("/cities/1");
    expect(res.statusCode).toBe(204);
    // expect(res.body).toBe(1)
})