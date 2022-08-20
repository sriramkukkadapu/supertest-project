import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/');
import { expect } from 'chai';

describe('Get Users suite', () =>{

describe('', () =>{
    it('Get all users', ()=>{
        request.get('/users').end((err,res) => {
            // console.log(err);
            // console.log(res.body);
            expect(res.body.data).to.not.be.empty;
            

            //for a diff api https://gorest.co.in/public/v2/users
            //if response is array
            // expect(res.body.length).to.be.greaterThan(0);
            // expect(res.body.length).to.be.greaterThan(100);

        })

    });


    it('Get specific user', ()=>{
        request.get('/users/4108').end((err,res) => {
            // console.log(res.body);
            expect(res.body.data).to.not.be.empty;
            expect(res.body.data.id).to.equal(4108);

        })

    });


    it('Get with query params', ()=>{
        const url = '/users?page=5&gender=female&status=active';

        request.get(url).end((err,res) => {
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