import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import styles from './TransactionList.module.css'

type Props = {}

function TransactionList({}: Props) {
	const context = useContext(GlobalContext)
	console.log('context: ', context?.transactions)
	return (
		<>
			<h3>History</h3>
			<ul className={styles.list}>
				{context?.transactions.map(transaction => (
					<li className={styles.minus} key={transaction.id}>
						Cash <span>-£{transaction.amount}</span>
						<button className={styles.deleteBtn}>x</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default TransactionList
