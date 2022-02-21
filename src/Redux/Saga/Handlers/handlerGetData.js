import { call, put } from "redux-saga/effects";
import { SetData } from "../../Actions/Actions";
import AxiosRequests from "../Requests/AxiosRequests";



 function* handlerGetData(action) {

    try{
        const response = yield call (AxiosRequests , action.id ); 
        const data = response.data ; 
        //console.log(data)
        yield put(SetData(data)) ; 

    }
    catch(err){
        console.log(err)
    }
}
export default handlerGetData ;