import React from 'react'
import {Obj} from '../context/GlobalState'
import styles from './Transaction.module.css'

type TransactionProp = {
	transaction: Obj
}

function Transaction({transaction}: TransactionProp) {
	const sign = transaction.amount < 0 ? '-' : '+'
	return (
		<li
			className={transaction.amount < 0 ? `${styles.minus}` : `${styles.plus}`}>
			Cash{' '}
			<span>
				{sign}£{Math.abs(transaction.amount)}
			</span>
			<button className={styles.deleteBtn}>x</button>
		</li>
	)
}

export default Transaction
