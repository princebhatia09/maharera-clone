import thunk from "redux-thunk"
import { applyMiddleware,combineReducers,compose,createStore } from "redux"

import { userRegister } from "./redux/reducers/userReducer"
import { stateReducer } from "./redux/reducers/promReducer"
const reducer = combineReducers({
    adduser:userRegister,
    getstateList:stateReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const store = createStore(reducer,
    
    composeEnhancer(applyMiddleware(thunk))
)

export default store