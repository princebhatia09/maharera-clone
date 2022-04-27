import mongoose from "mongoose";

const DistrictSchema = new mongoose.Schema({

    DistrictItems:{

        TalukaId:{type:Number,required:true,unique:true},
        TalukaName:{type:String,required:true},
        state:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"State",
            required:true
        }
    }

},{
    timestamps:true
})

const District = new mongoose.model('District',DistrictSchema)
export default District 