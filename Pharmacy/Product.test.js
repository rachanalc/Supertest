const request = require('supertest');
//import the function from the external file
const { login } = require('../login/login')
describe("Positive Cases",()=>{
    let cookies;
    beforeAll(async () =>{
        cookies= await login();
    })
    //get
    it("Should be able to get Product", async ()=>{
        const response = await request("http://localhost:3000")
        .get("/api/v1/pharmacy/product/497f6eca-6276-4993-bfeb-53cbbbba6f08")
        .set('Cookie', cookies)
        
        expect(response.status).toBe(200);

        console.log(response.body);

    })
    //add
    it ("Should be able to add Product",async ()=>{
        const response= await request ("http://localhost:3000")
        .post("/api/v1/pharmacy/product")
        .set('Cookie', cookies)
        .send({
            
                id: "397f6eca-6276-4993-bfeb-53cbbbba6f08",
                brandName: "Flexon",
                genericName: "Flexon",
                patientCostCents: 30,
                patientCostCurrency: "10",
                manufacturerId: "de543c70-11ab-4557-8e1c-0673f1438ae9",
                supplierIds: [
                  "7a9c53b3-214a-4e88-9bf9-a78d88816647"
                ],
                category: "surgical",
                doseform: "tablet",
                doseAmount: "2"
              
        })

    console.log(response.body);
    expect(response.status).toBe(200);

})
//delete
it("should be able to delete product",async()=>{
    const response = await request("http://localhost:3000")
    .delete("/api/v1/pharmacy/product/397f6eca-6276-4993-bfeb-53cbbbba6f08")
    .set('Cookie',cookies);
  console.log(response.body);
  expect(response.status).toBe(200);
  })
})



