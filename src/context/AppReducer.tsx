import {Action, Actions, State} from '../types'

export default function AppReducer(state: State, action: Action) {
	switch (action.type) {
		case Actions.GET_TRANSACTIONS:
			return {
				...state,
				loading: false,
				transactions: action.payload,
			}
		case Actions.ADD_TRANSACTION:
			return {
				...state,
				transactions: [...state.transactions, action.payload],
			}
		case Actions.DELETE_TRANSACTION:
			return {
				...state,
				transactions: state.transactions.filter(
					transaction => transaction._id !== action.payload
				),
			}
		case Actions.TRANSACTIONS_ERROR:
			return {
				...state,
				error: action.payload,
			}
		default:
			return state
	}
}
