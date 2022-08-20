import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/');
import { expect } from 'chai';
import { faker } from '@faker-js/faker';
const TOKEN = "6d3c1e07c99bc7aca4c3916ed5a148aa2174c5fcfe14e8e85069db2a24fcb0d4";

describe('Delete user suite ', () =>{

let userId = null;

describe('', () =>{
   
    it('Post - Create a user', ()=>{
        const email= faker.internet.email();
        const data = {
            email: email,
            name: faker.internet.userName(),
            gender: 'male',
            status: 'inactive'
        };

        return request
            .post('/users')
            .set("Authorization", `Bearer ${TOKEN}` )
            .send(data)
            .then((res) => {
                userId = res.body.data.id;
        })

    });  

    it('Delete - delete a user', ()=>{

        return request
            .delete('/users/'+userId)
            .set("Authorization", `Bearer ${TOKEN}` ) 
            .then((res) => {
                // console.log(res.body);
                // verify response has no error msg in data field
                expect(res.body.data).to.eq(null);
                // expect(res.body.data).to.deep.include(data);
            });    
    });        
    
});

});
