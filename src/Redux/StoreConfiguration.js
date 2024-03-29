import {combineReducers , compose ,applyMiddleware ,  createStore} from "redux"
import  dataReducer, { FetchServiceReducer, FetchUsersReducer }  from "./Reducers/Reducers"
import createSagaMiddleware  from 'redux-saga'
import sagaWatcher from "./Saga/SagaWatcher";



const reducers =combineReducers({
    datareducer : dataReducer , 
    fetchservicereduver : FetchServiceReducer , 
    fetchusersreducer : FetchUsersReducer 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose ; 

const sagamiddleware  = createSagaMiddleware() ; 

 const Store= createStore(reducers , {} ,composeEnhancer(applyMiddleware(sagamiddleware)) ) ; 

 sagamiddleware.run(sagaWatcher)


 export default Store ; 