import express  from "express";

import UserAdd from "../Database/Models/Userregistration.js";

const newuserregister = express.Router()

newuserregister.post("/userRegister",async(req,res,next)=>{

    console.log(req.body)

    try {
        
        const addnewuser = new UserAdd({
            userRegistration:req.body.userRegistration
        })
        const saveUser = await addnewuser.save()
        res.status(200).json({"message":saveUser})
    } catch (error) {
        res.status(400).json({"message":error})
        // throw new Error("User Already Registered")
    }



})


export default newuserregister