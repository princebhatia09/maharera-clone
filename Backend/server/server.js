import express from "express";
import multer from "multer";
import cors from "cors"
import district from "../routers/District.js";
import taluka from "../routers/Taluka.js"
import newuserregister from "../routers/UserRegistration.js";

var upload = multer();

const port = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(upload.array())

app.use("/SearchList",district)
app.use("/SearchList",taluka)
app.use("/register",newuserregister)

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
})

app.listen(port,()=>{
    console.log(`listening to ${port}`)
})


export default app