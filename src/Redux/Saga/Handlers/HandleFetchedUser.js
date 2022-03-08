import {  put } from "redux-saga/effects";
import { SetFetchedUser } from "../../Actions/Actions";


 function* HandleFetchedUser (action){
     console.log(action)
    yield put(SetFetchedUser(action.user))
}

export default HandleFetchedUser ;