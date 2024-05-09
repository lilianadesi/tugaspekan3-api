// ini adalah contoh api automaton menggunakan module js
import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/tokenTugas.spec.js";
import { createUser, getDetailuser, updateUser, deleteUSer } from "../function/crudUser.spec.js";

describe("Tugas Api Automation - supertest, mocha dan chai", () => {
    it("Create token", async function () {
        this.timeout(5000)
        const token = await createToken()
        console.log(await token)
    })

    it("Create Users", async function () {
        this.timeout(5000)
            //Assertion 
        let response = await createUser()
        expect((await response).status).to.equal(201)  
        expect((await response).body.message).to.equal("User berhasil ditambahkan")
    })

    it("Get Detail Users", async function () {
        this.timeout(5000)
            //Assertion 
        let response = await getDetailuser()
        expect((await response).status).to.equal(200)  
        expect((await response).body.status).to.equal("success")
    })

    it("Update Users", async function () {
        this.timeout(5000)
            //Assertion 
        let response = await updateUser()
        expect((await response).status).to.equal(200)
        expect((await response).body.message).to.equal("User berhasil diupdate")  
    })

    it("Delete Users", async function () {
        this.timeout(5000)
            //Assertion 
        let response = await updateUser()
        expect((await response).status).to.equal(200)  
        expect((await response).body.status).to.equal("success")  
    }) 
})




