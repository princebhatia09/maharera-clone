import {USERREGISTER_REQUEST,USERREGISTER_SUCCESS,USERREGISTER_FAIL} from "../constants/userconstants"

export const userRegister = (state={},action)=>{

    switch(action.type){
        case USERREGISTER_REQUEST:
            return {loading:true}
        case USERREGISTER_SUCCESS:
            return {loading:false,error:false,userInfo:action.payload}
        case USERREGISTER_FAIL:
            return {loading:false,error:true,userInfo:action.payload}

        default:
            return state
    }


}
