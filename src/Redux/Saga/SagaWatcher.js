import { all, takeLatest } from "redux-saga/effects" 
import ActionTypes from "../ActionTypes/ActionTypes";
import { HandleFetchService } from "./Handlers/HandleFetchService";
import handlerGetData from "./Handlers/handlerGetData";

function* sagaWatcher (){
    yield all([
        takeLatest (ActionTypes.Get_data , handlerGetData ) , 
        takeLatest(ActionTypes.Fetch_service,HandleFetchService) , 
        takeLatest(ActionTypes.Remove_Selected_Fetched_service , ()=>{})
    ])
}

export default sagaWatcher ; 