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

export const FetchService =(data)=>{
    return{
        type : ActionTypes.Fetch_service , 
        data
    }
}

export const SelectedService = (data)=>{
    return{
        type:ActionTypes.Select_Fetched_service , 
        data 
    }
}

export const RemoveSelectedFetchedService = ()=>{
    return{
        type:ActionTypes.Remove_Selected_Fetched_service , 
    }
}