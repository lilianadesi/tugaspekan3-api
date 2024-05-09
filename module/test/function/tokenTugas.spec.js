import request from "supertest";
import { baseUrl } from "../../data/configTugas.js";

export async function createToken(){
    const payload = {
        "email": "sample@ex.com",
        "password": "123adsfadf@"
     }
     

    //send request
    const response = await request (baseUrl)
        .post("/authentications") //endpoint
        .send(payload) //request body
        .set("Content-Type","application/json") //header
    
    const token = (await response).body.token
    return token 
}