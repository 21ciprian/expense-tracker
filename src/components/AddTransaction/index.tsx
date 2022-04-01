import {useAuth0} from '@auth0/auth0-react'
import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import styles from './AddTransaction.module.css'

function AddTransaction(): JSX.Element {
	const {user} = useAuth0()
	const context = useContext(GlobalContext)
	const [text, setText] = useState<string>('')
	const [amount, setAmount] = useState<string>('')
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const newTransaction = {
			_id: context.transactions.length + 1,
			text,
			amount: +amount,
			email: user!.email!,
		}

		context.addTransaction?.(newTransaction)
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
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setText(e.target.value)
						}
					/>
				</div>
				<div className={styles.formControl}>
					<label htmlFor='amount'>Amount(add '-' for negative numbers)</label>
					<input
						required
						type='number'
						placeholder='Enter amount...'
						value={amount}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setAmount(e.target.value)
						}
					/>
				</div>
				<button className={styles.button}>Add transaction</button>
			</form>
		</section>
	)
}

export default AddTransaction
