import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/');
import { expect } from 'chai';

describe('Get Users suite', async () =>{

let userId = null;

describe('', () =>{
    
    it('Get all users', async ()=>{
        const res = await request.get('/users').then((res) => {
            // console.log(err);
            // console.log(res.body);
            expect(res.body.data).to.not.be.empty;
            
            userId = res.body.data[0].id;
            // console.log('=======> '+userId);
            //for a diff api https://gorest.co.in/public/v2/users
            //if response is array
            // expect(res.body.length).to.be.greaterThan(0);
            // expect(res.body.length).to.be.greaterThan(100);

        })

    });


    it('Get specific user', async ()=>{
        const res = await request.get('/users/'+userId).then((res) => {
            // console.log(res);
            // console.log(res.);
            expect(res.body.data).to.not.be.empty;
            expect(res.body.data.id).to.equal(userId);

        })

    });


    it('Get with query params', async ()=>{
        const url = '/users?page=5&gender=female&status=active';

        const res = await request.get(url).then((res) => {
            // console.log(res.body);
            expect(res.body.data).to.not.be.empty;
            res.body.data.forEach(element => {
                expect (element.gender).to.eq("female");
                expect (element.status).to.eq("active");
            });
        })

    });    
    
});

});