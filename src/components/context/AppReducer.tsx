export enum Actions {
	DELETE_TRANSACTION = 'DELETE_TRANSACTION',
	ADD_TRANSACTION = 'ADD_TRANSACTION',
}
export type TransactionProps = {
	id: number
	text: string
	amount: number
	// deleteTransaction?: (id: number) => void
}
export interface State {
	transactions: TransactionProps[]
}
export interface Action {
	type: Actions
	payload: number | TransactionProps | any //| Obj
}
export default function AppReducer(state: State, action: Action) {
	switch (action.type) {
		case Actions.DELETE_TRANSACTION:
			return {
				...state,
				transactions: state.transactions.filter(
					transaction => transaction.id !== action.payload
				),
			}
		case Actions.ADD_TRANSACTION:
			return {
				...state,
				transactions: [...state.transactions, action.payload], //action.payload
			}
		default:
			return state
	}
}
