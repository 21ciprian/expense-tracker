import {createContext, useReducer} from 'react'
import {Actions, Children, InitialState, TransactionProps} from '../types'
import AppReducer from './AppReducer'

//initial state
export const initialState = {
	transactions: [
		{id: 1, text: 'Book', amount: -20},
		{id: 2, text: 'Phone', amount: -200},
		{id: 3, text: 'Payment', amount: 100},
	],
}

export const GlobalContext = createContext<InitialState>(initialState)
export const GlobalProvider = ({children}: Children) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	function deleteTransaction(id: number) {
		dispatch({
			type: Actions.DELETE_TRANSACTION,
			payload: id,
		})
	}
	function addTransaction(transaction: TransactionProps) {
		dispatch({
			type: Actions.ADD_TRANSACTION,
			payload: transaction,
		})
	}
	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}
