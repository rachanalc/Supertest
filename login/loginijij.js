const request = require('supertest');

describe("Positive cases", ()=>{
    it("Should be able to login", async ()=>{
        const response = await request("http://localhost:3000")
        .post("/api/v1/session")
        .send(
            {
                username: "superman",
                password: "test1"
            }
        )

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.objectContaining(
                {
                    sub: expect.any(String),
                    emailVerified: expect.any(Boolean),
                    name: expect.any(String),
                    preferredUsername: expect.any(String),

                }
            )
        )
        console.log(response.body);
    })
        
})
describe("Negetive cases", ()=>{
    it("Should  not be able to login", async ()=>{
        const response = await request("http://localhost:3000")
        .post("/api/v1/session")
        .send(
            {
                username: "superman",
                password: "test"
            }
        )

        expect(response.status ) .toBe(401)
        expect(response.body).toEqual(
            expect.objectContaining(
                {
                    
                        "error": expect.objectContaining({
                            "error": "Invalid Credentials",
                            "originalMessage": expect.any(String),
                        }),
                     

                }
            )
        )
        console.log(response.body);
    })
})
describe("Negetive Cases",()=>{
    it("Should not be able to login",async ()=>{
        const response = await request("http://localhost:3000")
        .post("/api/v1/session")
        .send(
            {
                username: "superman",
                password: ""
            }
        )
        expect(response.status).toBe(401)
        expect(response.body).toEqual(
            expect.objectContaining(
                {
                    
                        "error": expect.objectContaining({
                            "error": "Invalid Credentials",
                            "originalMessage": expect.any(String),
                        }),
                     

                }
            )
        )
        console.log(response.body);
    })
})