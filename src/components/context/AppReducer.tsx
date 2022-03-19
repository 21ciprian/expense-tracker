export enum Actions {
	MINUS = 'MINUS',
	PLUS = 'PLUS',
}
export type TransactionProps = {
	id: number
	text: string
	amount: number
}
export interface State {
	transactions: TransactionProps[]
}
export interface Action {
	type: Actions
	payload: TransactionProps[]
}
export default function AppReducer(state: State, action: Action) {
	switch (action.type) {
		default:
			return state
	}
}
