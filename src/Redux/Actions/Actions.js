import ActionTypes from "../ActionTypes/ActionTypes"


export const GetData =(id)=>{
    return {
        type : ActionTypes.Get_data , 
        id
    }
}

export const SetData =(data)=>{
    return {
        type : ActionTypes.Set_data , 
        data 
    }
}