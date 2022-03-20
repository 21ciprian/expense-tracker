import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import styles from './AddTransaction.module.css'

function AddTransaction() {
	const context = useContext(GlobalContext)
	const [text, setText] = useState<string>('')
	const [amount, setAmount] = useState<string>('')
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
		setAmount('')
	}

	return (
		<section className={styles.addTransaction}>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className={styles.formControl}>
					<label htmlFor='text'>Text</label>
					<input
						required
						type='text'
						placeholder='Enter text...'
						value={text}
						onChange={e => setText(e.target.value)}
					/>
				</div>
				<div className={styles.formControl}>
					<label htmlFor='amount'>Amount(add '-' for negative numbers)</label>
					<input
						required
						type='number'
						placeholder='Enter amount...'
						value={amount}
						onChange={(e: any) => setAmount(e.target.value)}
					/>
				</div>
				<button className={styles.button}>Add transaction</button>
			</form>
		</section>
	)
}

export default AddTransaction
