import React from 'react'
import styles from './IncomeExpenses.module.css'

type Props = {}

function IncomeExpenses({}: Props) {
	return (
		<section className={styles.incExpContainer}>
			<div>
				<h4>Income</h4>
				<p className={`${styles.money} ${styles.plus}`}>+£0.00</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className={`${styles.money} ${styles.minus}`}>-£0.00</p>
			</div>
		</section>
	)
}

export default IncomeExpenses
