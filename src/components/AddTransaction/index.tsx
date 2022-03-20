import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import styles from './AddTransaction.module.css'

function AddTransaction() {
	const context = useContext(GlobalContext)
	const [text, setText] = useState<string>('')
	const [amount, setAmount] = useState<number>(0)
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const newTransaction = {
			id: context.transactions.length + 1,
			text,
			amount: +amount,
		}
		console.log('newTransaction: ', newTransaction)
		context?.addTransaction?.(newTransaction)
		setText('')
		setAmount(0)
	}

	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className={styles.formControl}>
					<label htmlFor='text'>Text</label>
					<input
						type='text'
						placeholder='Enter text...'
						value={text}
						onChange={e => setText(e.target.value)}
					/>
				</div>
				<div className={styles.formControl}>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						placeholder='Enter amount...'
						value={amount}
						onChange={(e: any) => setAmount(e.target.value)}
					/>
				</div>
				<button type='submit' className={styles.button}>
					Add transaction
				</button>
			</form>
		</>
	)
}

export default AddTransaction
