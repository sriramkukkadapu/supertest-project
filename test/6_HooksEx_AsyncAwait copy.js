import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/');
import { expect } from 'chai';
import { faker } from '@faker-js/faker';
const TOKEN = "6d3c1e07c99bc7aca4c3916ed5a148aa2174c5fcfe14e8e85069db2a24fcb0d4";

describe('Before hook example, Post user suite', async () =>{

let postId = null;
let userId = null;

before( async()=>{

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
        .send(data)
        .then((res) => {
            userId = res.body.data.id;
            // console.log(res.body);
    })

})

describe('', () =>{

    it('Post - Create a Blog post', async ()=>{
        const email= faker.internet.email();
        const data = {
            "user_id": userId,
            "title":"Sample blog",
            "body":"Sample content"
            };

        const res = await  request
            .post('/posts')
            .set("Authorization", `Bearer ${TOKEN}` )
            .send(data);
                
        // console.log(res.body);            
        expect(res.body.code).to.eq(201);  
        expect(res.body.data).to.deep.include(data);
        
        postId = res.body.data.id;

    });  


    it('Get - Post with id', async()=>{

        await  request
        .get('/posts/'+postId)
        .set("Authorization", `Bearer ${TOKEN}` )
        .expect(200);

    })
    
});

});
