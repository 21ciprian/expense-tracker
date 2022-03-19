import React from 'react'
import styles from './Balance.module.css'

type BalanceProps = {
	balance: number
}

function Balance({balance}: BalanceProps) {
	return (
		<>
			<h4>Your balance</h4>
			<h1 className={styles.balance}>{balance}</h1>
		</>
	)
}

export default Balance
