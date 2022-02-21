import ActionTypes from "../ActionTypes/ActionTypes"

const intialstate = {
    data: []
}


 const dataReducer = (state = intialstate, action) => {
    //console.log("arafat" ) ;
    switch (action.type) {
        case ActionTypes.Set_data:
            const  data = action.data; 
            //console.log(data)
            return { ...state, data } ;
        default:
            return state
    }
}

export default dataReducer ; 