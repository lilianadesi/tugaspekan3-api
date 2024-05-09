import request from "supertest";
import { baseUrl } from "../../data/configTugas.js";


const userID = "6341f82a-636f-4fe4-8471-38a8ee4c08e3"

//Create User
export async function createUser(){
    const payload = {
        "name": "kasir-serbaguna",
        "email": "user@example.com",
        "password": "jiasda2321@"
     }
     
    //send request
let response = await request (baseUrl)
            .post("/users") //endpoint
            .send(payload) //request body
            .set("Content-Type","application/json") //header
            .set("Authorization" , "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNTI0NzM2N30.h2NNvF3iHyxOlMhd5eJakz4aDIn9d2MnKuRq13kK07M")
    // let status = (await response).status
    // console.log (await response)
    return await response

}

//Get User Detail
export async function getDetailuser(){
    //send request
let response = await request (baseUrl)
    .get(`/users/${userID}`) //endpoint
    .set("Content-Type","application/json") //header
    .set("Authorization" , "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNTI0NzM2N30.h2NNvF3iHyxOlMhd5eJakz4aDIn9d2MnKuRq13kK07M")
    // let status = (await response).status
    return await response
}

export async function updateUser(){
    const payload = {
        "name": "update-user",
        "email": "contoh@example.com"
        }
        
    //send request
let response = await request (baseUrl)
    .put(`/users/${userID}`) //endpoint
    .send(payload) //request body
    .set("Content-Type","application/json") //header
    .set("Authorization" , "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNTI0NzM2N30.h2NNvF3iHyxOlMhd5eJakz4aDIn9d2MnKuRq13kK07M")
    // console.log(response)
    // let status = (await response).status
    return await response
}

//Delete Useer
export async function deleteUSer(){
    //send request
let response = await request (baseUrl)
    .delete(`/users/${userID}`) //endpoint
    .set("Content-Type","application/json") //header
    .set("Authorization" , "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNTI0NzM2N30.h2NNvF3iHyxOlMhd5eJakz4aDIn9d2MnKuRq13kK07M")
    // let status = (await response).status
    return await response
}



