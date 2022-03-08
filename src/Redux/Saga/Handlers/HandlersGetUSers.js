import { call, put } from "redux-saga/effects";
import { SetUsers } from "../../Actions/Actions";
import AxiosUseRequest from "../Requests/AxiosUserRequests";



function* HandlerGetUsers(action){
    
    try{
        const response = yield call (AxiosUseRequest)
        const users =response.data ; 
        yield put(SetUsers(users))
    }
    catch(err){
        console.log("Error getting users data ")
    }
}

export default HandlerGetUsers ; 