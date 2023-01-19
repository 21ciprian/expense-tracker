import {useAuth0} from '@auth0/auth0-react'
import React, {useContext, useState} from 'react'
import Button from '../../components/Button'
import {GlobalContext} from '../../context/GlobalState'
import styles from './AddTransaction.module.css'

function AddTransaction(): JSX.Element {
	const {user} = useAuth0()
	const context = useContext(GlobalContext)
	const [transactionName, setTransactionName] = useState<string>('')
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
			transactionName,
			description,
			venue,
			date,
			amount: +amount,
			email: user!.email!
		}
		context.addTransaction?.(newTransaction)
		setTransactionName('')
		setAmount('')
		setDate('')
		setVenue('')
		setDescription('')
	}

	return (
		<section className={styles.addTransaction}>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className={styles.formControl}>
					<input
						required
						type='text'
						placeholder='Transaction...'
						value={transactionName}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setTransactionName(e.target.value)
						}
					/>
					<textarea
						required
						placeholder='Description...'
						value={description}
						maxLength={256}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setDescription(e.target.value)
						}
					/>
					<input
						required
						type='text'
						placeholder='Venue...'
						value={venue}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setVenue(e.target.value)
						}
					/>
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
