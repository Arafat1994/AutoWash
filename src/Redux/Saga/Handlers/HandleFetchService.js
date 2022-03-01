import { call, put } from "redux-saga/effects";
import { SelectedService } from "../../Actions/Actions";
import AxiosFetchService from "../Requests/AxiosFetchService";



export function* HandleFetchService(action) {

    /*
    note : we do that to make this handler dynamic for service_selcted_fetch  or any fetched_selcted_data 
    const  data = response.data[keyComponent][Number(id)];
    explanation : response.data.whatwedocomponent[0]
    keycomponnet =>> here itis a variable to put which data componet you wamt to ask api about 
    id  (0)         =>> hre choose which component that user click on it 
    */
    try {
        const response = yield call(AxiosFetchService);
        const { id } = action.data;
        const keyComponent = action.data.keyComponent;
        const data = response.data[keyComponent][Number(id)];
        //console.log(data) 
        yield put(SelectedService(data));

    }
    catch (err) {
        console.log("error here from handler fetch service ")
    }
}