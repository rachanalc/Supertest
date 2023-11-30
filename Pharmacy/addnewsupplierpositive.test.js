const request = require('supertest');
//import the function from the external file
const { login } = require('../login/login')
describe("Positive cases", ()=>{
    let cookies;
    beforeAll(async () =>{
        cookies= await login();
    })
    it("Should be able to get Supplier", async ()=>{
        const response = await request("http://localhost:3000")
        .get("/api/v1/pharmacy/supplier")
        .set('Cookie', cookies)
        
        expect(response.status).toBe(200);
        
        //console.log(response.body);
    })
        
})