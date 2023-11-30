const request = require("supertest");
//import the function from the external file
const { login } = require("../login/login");
describe("Negetive cases", () => {
  let cookies;
  beforeAll(async () => {
    cookies = await login();
  });
  it("Should not be able to get Supplier", async () => {
    const response = await request("http://localhost:3000")
      .post("/api/v1/pharmacy/supplier")
      .set("Cookie", cookies)
      .send({
        id: "719f6eca-6276-4993-bfeb-53cbbbba6f08",
        name: "200",
        billingAddress: "ktm",
        contactNumber: "9834231423",
        panNumber: "91",
        email: "n@gmail.com",
        tdsPercentage: 66,
      });

    console.log(response.body);
    expect(response.status).toBe(200);
  });
  
})