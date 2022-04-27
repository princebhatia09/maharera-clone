import mongoose from "mongoose"

try {
    mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/MahaRera',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true,
        // in mongodb 6 these are bydefault true
        
    },()=>{
        console.log("mongoose")
    })
    
} catch (error) {
    throw new Error("Mongoose not connected")
}


export default mongoose