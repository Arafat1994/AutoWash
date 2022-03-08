
import ActionsTypes from "../ActionTypes/ActionTypes"
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


export const GetUser=()=>{
    return{
        type:ActionTypes.Get_Users
    }

}
export const SetUsers=(users)=>{
    return{
        type:ActionTypes.Set_Users , 
        users
    }
    
}


export const GetFetchedUser =(user)=>{
    return{
        type : ActionsTypes.Get_Fetched_user , 
        user
    }
}
export const  SetFetchedUser = (user)=>{
    return{
        type:ActionsTypes.Set_Fetched_User , 
        user
    }
}

