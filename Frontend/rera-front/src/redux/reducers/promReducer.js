import { PROMLIST_REQUEST,PROMLIST_SUCCESS,PROMLIST_FAIL } from "../constants/usertypeconstants";

export const stateReducer = (state={},action)=>{


    switch (action.type) {
        case PROMLIST_REQUEST:
            return {isLoading:true}
        case PROMLIST_SUCCESS:
            return {isLoading:false,isError:false,data:action.payload}
        case PROMLIST_FAIL:
            return {isLoading:false,isError:true,data:action.payload}
        default:
            return state
    }

}