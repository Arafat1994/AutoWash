import { createSelector } from "reselect";


const getService= (state)=> state.fetchservicereduver ; 
export const getServiceSelector = createSelector(
    [getService] , 
    (fetchservicereduver=>fetchservicereduver)
)