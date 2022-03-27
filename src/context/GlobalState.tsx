import {useAuth0} from '@auth0/auth0-react'
import {createContext, useReducer} from 'react'
import {Actions, Children, InitialState, TransactionProps} from '../types'
import AppReducer from './AppReducer'

//initial state
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000'
export const initialState = {
	transactions: [],
	error: null,
	loading: true,
}

export const GlobalContext = createContext<InitialState>(initialState)
export const GlobalProvider = ({children}: Children) => {
	const {user} = useAuth0()

	const [state, dispatch] = useReducer(AppReducer, initialState)
	async function getTransactions(): Promise<void> {
		try {
			const response = await fetch(
				`${baseURL!}/api/v1/user/${user?.email}/transactions`
			)
			const data = await response.json()
			console.log('data: ', data)
			dispatch({
				type: Actions.GET_TRANSACTIONS,
				payload: data.payload,
			})
		} catch (error: any) {
			dispatch({
				type: Actions.TRANSACTIONS_ERROR,
				payload: error.message,
			})
		}
	}
	async function deleteTransaction(id: number): Promise<void> {
		try {
			await fetch(`${baseURL!}/api/v1/user/${user?.email}/transactions/${id}`, {
				method: 'DELETE',
			})
			dispatch({
				type: Actions.DELETE_TRANSACTION,
				payload: id,
			})
		} catch (error: any) {
			dispatch({
				type: Actions.TRANSACTIONS_ERROR,
				payload: error.message,
			})
		}
	}
	async function addTransaction(transaction: TransactionProps): Promise<void> {
		try {
			const response = await fetch(
				`${baseURL!}/api/v1/user/${user?.email}/transactions`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						text: transaction.text,
						amount: transaction.amount,
						email: transaction.email,
					}),
				}
			)
			const data = await response.json()
			console.log('POST data.payload: ', data.payload)
			dispatch({
				type: Actions.ADD_TRANSACTION,
				payload: data.payload,
			})
		} catch (error: any) {
			dispatch({
				type: Actions.TRANSACTIONS_ERROR,
				payload: error.message,
			})
		}
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
