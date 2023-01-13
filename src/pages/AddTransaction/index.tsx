import {useAuth0} from '@auth0/auth0-react'
import React, {useContext, useState} from 'react'
import Button from '../../components/Button'
import {GlobalContext} from '../../context/GlobalState'
import styles from './AddTransaction.module.css'

function AddTransaction(): JSX.Element {
	const {user} = useAuth0()
	const context = useContext(GlobalContext)
	const [text, setText] = useState<string>('')
	const [date, setDate] = useState<string>('')
	const [venue, setVenue] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [amount, setAmount] = useState<string>('')
	const buttonStyle = {
		width: '100%'
	}
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const newTransaction = {
			_id: context.transactions.length + 1,
			text,
			amount: +amount,
			email: user!.email!
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
					{/* <label htmlFor='transaction'>Transaction</label> */}
					<input
						required
						type='text'
						placeholder='Transaction...'
						value={text}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setText(e.target.value)
						}
					/>{' '}
					{/* <label htmlFor='description'>Description</label> */}
					<textarea
						required
						placeholder='Description...'
						value={description}
						maxLength={6}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setDescription(e.target.value)
						}
					/>
					{/* <label htmlFor='venue'>Venue</label> */}
					<input
						required
						type='text'
						placeholder='Venue...'
						value={venue}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setVenue(e.target.value)
						}
					/>
					{/* <label htmlFor='date'>Date</label> */}
					<input
						required
						type='date'
						value={date}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setDate(e.target.value)
						}
					/>
				</div>
				<div className={styles.formControl}>
					{/* <label htmlFor='amount'>Amount</label> */}
					<input
						required
						type='number'
						placeholder='Amount...'
						value={amount}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setAmount(e.target.value)
						}
					/>
				</div>
				<Button style={buttonStyle} text='Add transaction' />
			</form>
		</section>
	)
}

export default AddTransaction
