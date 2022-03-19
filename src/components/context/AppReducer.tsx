export enum Actions {
	MINUS = 'MINUS',
	PLUS = 'PLUS',
}
export type Transaction = {
	id: number
	text: string
	amount: number
}
export interface State {
	transactions: Transaction[]
}
export interface Action {
	type: Actions
	payload: Transaction[]
}
export default function AppReducer(state: State, action: Action) {
	switch (action.type) {
		default:
			return state
	}
}
