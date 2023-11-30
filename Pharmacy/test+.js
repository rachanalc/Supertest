const request = require('supertest')

describe("Negetive Cases",()=>{
    it ("Should not be able to add new supplier",async()=>{
        const response = await request("http://localhost:3000")
        .post("http://localhost:8081/api/v1/pharmacy/supplier")

        .send(
        {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            name: "string",
            billingAddress: "string",
            contactNumber: "string",
            panNumber: "string",
            email: "string",
            tdsPercentage: 0
        }
        )
        expect(response.status).toBe(400)
    })
})