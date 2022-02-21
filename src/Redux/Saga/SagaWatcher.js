import { all, takeLatest } from "redux-saga/effects" 
import ActionTypes from "../ActionTypes/ActionTypes";
import handlerGetData from "./Handlers/handlerGetData";

function* sagaWatcher (){
    yield all([
        takeLatest (ActionTypes.Get_data , handlerGetData )
    ])
}

export default sagaWatcher ; 