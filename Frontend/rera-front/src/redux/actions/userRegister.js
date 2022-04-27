import axios from "axios"
import {USERREGISTER_REQUEST,USERREGISTER_SUCCESS,USERREGISTER_FAIL} from "../constants/userconstants"
import { toast } from 'react-toastify';
toast.configure()

export const addUser = (userdetails)=> async(dispatch)=>{

    dispatch({
        type:USERREGISTER_REQUEST,
    })

    try {
        const {data} = await axios.post("/register/userRegister",userdetails)
        dispatch({type:USERREGISTER_SUCCESS,payload:data})
        toast.success("User Registered Successfully",{
            position:toast.POSITION.TOP_RIGHT
        })
    
    }
    catch(error){
        dispatch({
            type:USERREGISTER_FAIL,
            payload:error.response && error.response.data.message ?
            error.response.data.message:error.message
        })
        toast.error(error.message,{position:toast.POSITION.TOP_RIGHT})

    }

}