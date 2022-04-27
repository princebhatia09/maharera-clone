import axios from "axios"
import { PROMLIST_FAIL, PROMLIST_REQUEST, PROMLIST_SUCCESS } from "../constants/usertypeconstants"

export const addprolist = () => async(dispatch)=>{

    dispatch({
        type:PROMLIST_REQUEST
    })

    try {
        const {data} = await axios.get("/SearchList/GetDistrict")
        dispatch({type:PROMLIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:PROMLIST_FAIL,    
        payload:error.response && error.response.data.message ?
        error.response.data.message:error.message
})
    }
}