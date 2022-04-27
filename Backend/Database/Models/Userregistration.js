import mongoose from "mongoose";

const UserRegistration = mongoose.Schema({

    userRegistration:{
        userType:{type:String,required:true,default:"Promoter"},
        state:{type:String,required:true,default:"Maharashtra"},
        name:{type:String,required:true},
        email:{type:String,required:true},
        phonenumber:{type:Number,required:true,unique:true},
        password:{type:String,required:true}

    }

},{
 timestamps:true
}
)

const UserAdd = mongoose.model("UserRegister",UserRegistration)

export default UserAdd