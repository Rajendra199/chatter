import React,{createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer'

const initialState = {
    message:""
}

//create context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = props => {
    const [state , dispatch] =  useReducer(AppReducer , initialState)
//action

const addMessage = msg =>{
    dispatch({type:'ADD_MESSAGES',payload:msg})
}
    return(
        <GlobalContext.Provider 
        value ={{
            message:state.message,
            addMessage
            }}
            >
            {props.children}
        </GlobalContext.Provider>
    )
}
