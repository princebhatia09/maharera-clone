import express from "express"
import District from "../Database/Models/District.js"

const taluka = express.Router()

taluka.post("/addTaluka",async(req,res)=>{

    try {
        const dist = new District({
    
            DistrictItems:req.body.DistrictItems
        })
    
        const saveTaluka = await dist.save()
        res.status(200).json({"message":saveTaluka})
        
    } catch (error) {
        res.status(400).json({"message":"Duplicate Not Allowed"})
    }

})

taluka.get("/getTaluka",async(req,res)=>{

    const data = await District.findById({"_id":"62419e0e17479a435d6778e1"})
    res.status(200).send({"message":data})

})

export default taluka