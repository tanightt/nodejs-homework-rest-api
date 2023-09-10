/* global describe beforeAll afterAll test expect */

const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");

const { HOST_TEST } = process.env;

const signInData = {
  email: "1@gmail.com",
  password: "123456",
};

describe("test sign in route", () => {
  let server = null;
  beforeAll(async () => {
    await mongoose.connect(HOST_TEST);
    server = app.listen(3000);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  test("test sign in with correct data", async () => {
    const { statusCode, body } = await request(app)
      .post("/api/users/login")
      .send(signInData);
    expect(statusCode).toBe(200);
    expect(body.email).toBe(signInData.email);
  });

  test("test to have property token and subscription", async () => {
    const { body } = await request(app)
      .post("/api/users/login")
      .send(signInData);
    expect(body).toHaveProperty("token");
    expect(body).toHaveProperty("subscription");
  });

  test("test user data types", async () => {
    const { body } = await request(app)
      .post("/api/users/login")
      .send(signInData);
    expect(typeof body.email).toBe("string");
    expect(typeof body.subscription).toBe("string");
  });
});
