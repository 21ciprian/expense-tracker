export enum Actions {
	DELETE_TRANSACTION = 'DELETE_TRANSACTION',
	ADD_TRANSACTION = 'ADD_TRANSACTION',
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
	payload: number | TransactionProps | any
}
export type InitialState = {
	transactions: TransactionProps[]
	deleteTransaction?: (id: number) => void
	addTransaction?: (transaction: TransactionProps) => void
}
export type Children = {
	children: React.ReactNode
}
export type TransactionProp = {
	transaction: TransactionProps
}
