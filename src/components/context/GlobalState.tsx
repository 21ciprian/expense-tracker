import {createContext, ReactNode, useReducer} from 'react'
import AppReducer from '../context/AppReducer'

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
}
type Children = {
	children: ReactNode
}
export const GlobalContext = createContext<InitialState | null>(initialState)
export const GlobalProvider = ({children}: Children) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)
	console.log('children: ', children)
	console.log('state: ', state)
	console.log('dispatch: ', dispatch)
	return (
		<GlobalContext.Provider value={{transactions: state.transactions}}>
			{children}
		</GlobalContext.Provider>
	)
}
