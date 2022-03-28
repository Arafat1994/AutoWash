import { createSelector } from "reselect";


const getMainData = (state)=>state.datareducer.data ; 

export const getMainDataSelectr= createSelector(
    [getMainData] , 
    (data)=>data
)