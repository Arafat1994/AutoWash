import { createSelector } from "reselect";


const getUsers =(state)=>state.fetchusersreducer.users ; 
const getUser=(state)=>state.fetchusersreducer.user ; 


export const getUsersSelector = createSelector(
    [getUsers] , 
    (users)=> users
)

export const getUserSelector = createSelector(
    [getUser], 
    (user)=>user
)