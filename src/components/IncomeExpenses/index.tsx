import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import {numberWithCommas} from '../../utils/format'
import styles from './IncomeExpenses.module.css'

function IncomeExpenses(): JSX.Element {
	const context = useContext(GlobalContext)
	const amounts = context?.transactions.map(transaction => transaction.amount)
	const income = amounts
		?.filter(amount => amount > 0)
		.reduce((acc, item) => acc + item, 0)
		.toFixed(2)
	const expense = amounts
		?.filter(amount => amount < 0)
		.reduce((acc, item) => acc + item, 0)
		.toFixed(2)
	return (
		<section className={styles.incExpContainer}>
			<div>
				<h4>Income</h4>
				<p className={`${styles.money} ${styles.plus}`}>
					£{numberWithCommas(Math.abs(Number(income)))}
				</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className={`${styles.money} ${styles.minus}`}>
					£{numberWithCommas(Math.abs(Number(expense)))}
				</p>
			</div>
		</section>
	)
}

export default IncomeExpenses
