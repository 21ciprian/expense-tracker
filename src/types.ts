export enum Actions {
	DELETE_TRANSACTION = 'DELETE_TRANSACTION',
	ADD_TRANSACTION = 'ADD_TRANSACTION',
	GET_TRANSACTIONS = 'GET_TRANSACTIONS',
	TRANSACTIONS_ERROR = 'TRANSACTIONS_ERROR',
}
export type TransactionProps = {
	_id: number
	text: string
	amount: number
	email: string
}
export interface State {
	transactions: TransactionProps[]
	loading: boolean
	error: null
}
export interface Action {
	type: Actions
	payload: number | TransactionProps | any
}
export type InitialState = State & {
	deleteTransaction?: (id: number) => void
	addTransaction?: (transaction: TransactionProps) => void
	getTransactions?: () => Promise<void>
}
export type Children = {
	children: React.ReactNode
}
export type TransactionProp = {
	transaction: TransactionProps
}
