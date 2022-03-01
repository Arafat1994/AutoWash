import { call, put } from "redux-saga/effects";
import { SelectedService } from "../../Actions/Actions";
import  AxiosFetchService  from "../Requests/AxiosFetchService";



export function* HandleFetchService (action){

    //console.log("handle fetch data ")
    //console.log(action)
    //onsole.log(action.data)
    //console.log(action.data.keyComponent)
    try{
        const response = yield call(AxiosFetchService) ; 
        const { id } = action.data ;
        const  data = response.data.WhatwedoComponent[Number(id)];
        //console.log(data) 
        yield put(SelectedService(data)) ; 
    
    }
    catch(err){
        console.log("error here from handler fetch service ")
    }
}