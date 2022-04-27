import  Mongoose  from "mongoose";

const StateSchema = new Mongoose.Schema({

    stateItems:{
        DivId:{type:Number,required:true,unique:true},
        DivName:{type:String,required:true}
    }
},{
   timestamps:true,

})

const State = Mongoose.model("State",StateSchema)
export default State