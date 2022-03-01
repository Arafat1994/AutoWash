import ActionsTypes from "../ActionTypes/ActionTypes";
import ActionTypes from "../ActionTypes/ActionTypes"

const intialstate = {
    data: []
}


const dataReducer = (state = intialstate, action) => {
    //console.log("arafat" ) ;
    switch (action.type) {
        case ActionTypes.Set_data:
            const data = action.data;
            //console.log(data)
            return { ...state, data };
        default:
            return state
    }
}


export const FetchServiceReducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.Select_Fetched_service:
            const { data } = action;
            return { ...state, ...data }
        case ActionsTypes.Remove_Selected_Fetched_service:
            return {}
        default:
            return state;
    }

}

export default dataReducer; 