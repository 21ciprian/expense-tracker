import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import styles from './Balance.module.css'

type BalanceProps = {
	balance: number
}

function Balance() {
	const context = useContext(GlobalContext)
	const amounts = context?.transactions.map(transaction => transaction.amount)
	const total = amounts?.reduce((acc, amount) => acc + amount, 0).toFixed(2)
	return (
		<>
			<h4>Your balance</h4>
			<h1 className={styles.balance}>{total}</h1>
		</>
	)
}

export default Balance
