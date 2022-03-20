import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import Transaction from '../Transaction'
import styles from './TransactionList.module.css'

function TransactionList() {
	const context = useContext(GlobalContext)
	console.log('context: ', context?.transactions)
	return (
		<>
			<h3>History</h3>
			<ul className={styles.list}>
				{context?.transactions.map(transaction => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	)
}

export default TransactionList
