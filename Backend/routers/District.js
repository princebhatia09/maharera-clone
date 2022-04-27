import express from "express";
import State from "../Database/Models/State.js";

const district = express.Router()

district.post("/addDistrict",async(req,res,next)=>{
    
    const divId = req.body.DivId
    const divName = req.body.DivName
    
    try{
        const state = new State({
            stateItems:req.body.stateItems
            
        })
        const saveDistrict = await state.save()

        res.status(200).send("ok")

    }catch{
        res.json({"message":"Duplicate Not Allowed"})
    }

}

)

district.get("/getDistrict",async(req,res)=>{
    
    const StateData= await State.find({})
    console.log(StateData)
    res.status(200).send({"message":StateData})

})

export default district