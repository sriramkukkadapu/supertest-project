import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/');
import { expect } from 'chai';
import { faker } from '@faker-js/faker';
const TOKEN = "6d3c1e07c99bc7aca4c3916ed5a148aa2174c5fcfe14e8e85069db2a24fcb0d4";

describe('Negative Tests suite', async () =>{

describe('', async () =>{

    it('Post - Create a user without token', async ()=>{
        const email= faker.internet.email();
        const data = {
            email: email,
            name: faker.internet.userName(),
            gender: 'male',
            status: 'inactive'
        };

        const res = await request
            .post('/users')
            // .set("Authorization", `Bearer ${TOKEN}` )
            .send(data)
            expect(res.body.code).to.eq(401);
            expect(res.body.data.message).to.eq("Authentication failed");
        })
    


    it('Post - Create a user without body', async ()=>{
        const email= faker.internet.email();
        const data = {
            email: email,
            name: faker.internet.userName(),
            gender: 'male',
            status: 'inactive'
        };

        const res = await request
            .post('/users')
            .set("Authorization", `Bearer ${TOKEN}` )
            // .send(data)
            // console.log(res.body);
            expect(res.body.code).to.eq(422);
            expect(res.body.data[3].field).to.equal("status");
            expect(res.body.data[3].message).to.equal("can't be blank");
        })


    });  

});  

