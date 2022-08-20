require('dotenv').config();
import { expect } from 'chai';
import { faker } from '@faker-js/faker';
import request from '../config/common';


const TOKEN = process.env.USER_TOKEN;

describe('Env variable Token', () =>{

describe('', () =>{

    it('Env Token - Create a user', ()=>{
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
                // console.log(res.body);
                expect(res.body.data.email).to.eq(email);
                expect(res.body.data.status).to.eq('inactive');
                expect(res.body.data.gender).to.eq('male');
                // expect(res.body.data.id).to.equal(4108);

                // data.email = "invalid";
                expect(res.body.data).to.deep.include(data);
        })

    });  
    
});

});