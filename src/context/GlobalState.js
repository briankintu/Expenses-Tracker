import { createContext, useReducer } from "react";
import AppReducer from "../context/AppReducer"

// Intial State

const intialState = {
    transactions: [
     
    ]
}


//Create context

export const GlobalContext = createContext(intialState);


//Provider Component

export const  GlobalProvider = ({ children}) => {

    const [state, dispatch] = useReducer(AppReducer, intialState)

    // actions

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }


return (<GlobalContext.Provider value={{
transactions: state.transactions,
deleteTransaction,
addTransaction
}}>
    {children}
</GlobalContext.Provider>);


}