import { all, takeLatest } from "redux-saga/effects" 
import ActionsTypes from "../ActionTypes/ActionTypes";
import HandleFetchedUser  from "./Handlers/HandleFetchedUser";
import { HandleFetchService } from "./Handlers/HandleFetchService";
import handlerGetData from "./Handlers/handlerGetData";
import HandlerGetUsers from "./Handlers/HandlersGetUSers";

function* sagaWatcher (){
    yield all([
        takeLatest (ActionsTypes.Get_data , handlerGetData ) , 
        takeLatest(ActionsTypes.Fetch_service,HandleFetchService) , 
        takeLatest(ActionsTypes.Remove_Selected_Fetched_service , ()=>{}) , 
        takeLatest(ActionsTypes.Get_Users , HandlerGetUsers ) ,
        takeLatest(ActionsTypes.Get_Fetched_user , HandleFetchedUser )
    ])
}

export default sagaWatcher ; 