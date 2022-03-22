import {createContext, useReducer} from 'react'
import {Actions, Children, InitialState, TransactionProps} from '../types'
import AppReducer from './AppReducer'

//initial state
export const initialState = {
	transactions: [],
	error: null,
	loading: true,
}

export const GlobalContext = createContext<InitialState>(initialState)
export const GlobalProvider = ({children}: Children) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)
	async function getTransactions(): Promise<void> {
		try {
			const response = await fetch(`http://localhost:5000/api/v1/transactions`)
			const data = await response.json()
			console.log('data: ', data)
			dispatch({
				type: Actions.GET_TRANSACTIONS,
				payload: data.payload,
			})
		} catch (error) {
			dispatch({
				type: Actions.TRANSACTIONS_ERROR,
				payload: error,
			})
		}
	}
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
				getTransactions,
				loading: state.loading,
				error: state.error,
				deleteTransaction,
				addTransaction,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}
