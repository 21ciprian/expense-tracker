import {createContext, ReactNode, useReducer} from 'react'
import AppReducer, {Actions} from '../context/AppReducer'

//initial state
export const initialState = {
	transactions: [
		{id: 1, text: 'Book', amount: -20},
		{id: 2, text: 'Phone', amount: -200},
		{id: 3, text: 'Payment', amount: 100},
	],
}
export type Obj = {
	id: number
	text: string
	amount: number
}
type InitialState = {
	transactions: Obj[]
	deleteTransaction?: (id: number) => void
}
type Children = {
	children: ReactNode
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
	return (
		<GlobalContext.Provider
			value={{transactions: state.transactions, deleteTransaction}}>
			{children}
		</GlobalContext.Provider>
	)
}
