import React, {useState} from 'react'
import styles from './AddTransaction.module.css'

type Props = {}

function AddTransaction({}: Props) {
	const [text, setText] = useState<string>('')
	const [amount, setAmount] = useState<number | string>('')
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
	}
	function handleClick(e: React.MouseEvent) {
		e.preventDefault()
		setText('')
		setAmount('')
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
				<button onClick={handleClick} type='submit' className={styles.button}>
					Add transaction
				</button>
			</form>
		</>
	)
}

export default AddTransaction
