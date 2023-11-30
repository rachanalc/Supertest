const request = require("supertest");
//import the function from the external file
const { login } = require("../login/login");
describe("Positive cases", () => {
  let cookies;
  beforeAll(async () => {
    cookies = await login();
  });
  it("Should be able to get Supplier", async () => {
    const response = await request("http://localhost:3000")
      .post("/api/v1/pharmacy/supplier")
      .set("Cookie", cookies)
      .send({
        id: "509f6eca-6276-4993-bfeb-53cbbbba6f08",
        name: "anamika",
        billingAddress: "ktm",
        contactNumber: "9834231423",
        panNumber: "67",
        email: "n@gmail.com",
        tdsPercentage: 66,
      });

    console.log(response.body);
    expect(response.status).toBe(200);
  });
//   it('Should be able to update the  app', async ()=>{
    
//    const response = await request("http://localhost:3000")
//     .patch("/api/v1/pharmacy/supplier/509f6eca-6276-4993-bfeb-53cbbbba6f08")
//     .set('Cookie', cookies)
//     .send({
//       name: "Rachana",
//       billingAddress: "ktm",
//       contactNumber: "9834231423",
//       panNumber: "67",
//       email: "n@gmail.com",
//       tdsPercentage: 66,
    

//   });

  console.log(response.body);
  // expect(response.status).toBe(200);
  
  
// })

it('Should be able to delete supplier name', async ()=>{
  const response = await request("http://localhost:3000")
  .delete("/api/v1/pharmacy/supplier/7b3fa70f-e94f-4fc2-b622-8c5dc8ad7eff")
  .set('Cookie',cookies);

  expect(response.status).toBe(200);
})

});
