import {Action, Actions, State} from '../types'

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
