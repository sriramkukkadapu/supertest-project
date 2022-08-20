import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/');
import { expect } from 'chai';
import { faker } from '@faker-js/faker';
const TOKEN = "6d3c1e07c99bc7aca4c3916ed5a148aa2174c5fcfe14e8e85069db2a24fcb0d4";


export const createRandomUser = async () => {

    const data = {
        email: faker.internet.email(),
        name: faker.internet.userName(),
        gender: 'male',
        status: 'inactive'
    };

    const res = await request
        .post('/users')
        .set("Authorization", `Bearer ${TOKEN}` )
        .send(data)
        return  res.body.data.id;
        
}