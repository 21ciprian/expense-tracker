import {useAuth0} from '@auth0/auth0-react'
import {createContext, useReducer} from 'react'
import {Actions, Children, InitialState, TransactionProps} from '../types'
import {getSub} from '../utils/utils'
import AppReducer from './AppReducer'

//initial state
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5761'
export const initialState = {
	transactions: [],
	error: null,
	loading: true
}

export const GlobalContext = createContext<InitialState>(initialState)
export const GlobalProvider = ({children}: Children) => {
	const {user} = useAuth0()
	const sub = getSub(user?.sub as string)
	const [state, dispatch] = useReducer(AppReducer, initialState)

	async function getTransactions(): Promise<void> {
		try {
			const response = await fetch(`${baseURL}/api/v1/user/${sub}/transactions`)
			const data = await response.json()
			dispatch({
				type: Actions.GET_TRANSACTIONS,
				payload: data.payload
			})
		} catch (error: any) {
			dispatch({
				type: Actions.TRANSACTIONS_ERROR,
				payload: error.message
			})
		}
	}
	async function deleteTransaction(id: number): Promise<void> {
		try {
			await fetch(`${baseURL}/api/v1/user/${sub}/transactions/${id}`, {
				method: 'DELETE'
			})
			dispatch({
				type: Actions.DELETE_TRANSACTION,
				payload: id
			})
		} catch (error: any) {
			dispatch({
				type: Actions.TRANSACTIONS_ERROR,
				payload: error.message
			})
		}
	}
	async function addTransaction(transaction: TransactionProps): Promise<void> {
		try {
			const response = await fetch(
				`${baseURL}/api/v1/user/${sub}/transactions`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						transactionName: transaction.transactionName,
						amount: transaction.amount,
						description: transaction.description,
						venue: transaction.venue,
						date: transaction.date
					})
				}
			)
			const data = await response.json()
			dispatch({
				type: Actions.ADD_TRANSACTION,
				payload: data.payload
			})
		} catch (error: any) {
			dispatch({
				type: Actions.TRANSACTIONS_ERROR,
				payload: error.message
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
				addTransaction
			}}>
			{children}
		</GlobalContext.Provider>
	)
}
