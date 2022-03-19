import React from 'react'
import styles from './TransactionList.module.css'

type Props = {}

function TransactionList({}: Props) {
	return (
		<>
			<h3>History</h3>
			<ul className={styles.list}>
				<li className={styles.minus}>
					Cash <span>-£400</span>
					<button className={styles.deleteBtn}>x</button>
				</li>
			</ul>
		</>
	)
}

export default TransactionList
