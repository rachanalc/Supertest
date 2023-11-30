const request = require("supertest");

console.log("api connect...");
const login = async () => {
  const response = await request("localhost:3000")
    .post("/api/v1/session")
    .send({
      username: "superman",
      password: "test1",
    });
  console.log("hello beautiful...");
  return response.headers["set-cookie"];
};
module.exports = { login };
