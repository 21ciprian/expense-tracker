import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import {TransactionProp} from '../../types'
import styles from './Transaction.module.css'

function Transaction({transaction}: TransactionProp) {
	const sign = transaction.amount < 0 ? '-' : '+'
	const context = useContext(GlobalContext)

	return (
		<li
			className={transaction.amount < 0 ? `${styles.minus}` : `${styles.plus}`}>
			{transaction.text}{' '}
			<span>
				{sign}£{Math.abs(transaction.amount)}
			</span>
			<button
				onClick={() => context?.deleteTransaction?.(transaction.id)}
				className={styles.deleteBtn}>
				x
			</button>
		</li>
	)
}

export default Transaction
