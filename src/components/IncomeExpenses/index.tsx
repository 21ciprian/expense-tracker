import React from 'react'
import styles from './IncomeExpenses.module.css'

type Props = {
	plus: number
	minus: number
}

function IncomeExpenses({plus, minus}: Props) {
	return (
		<section className={styles.incExpContainer}>
			<div>
				<h4>Income</h4>
				<p className={`${styles.money} ${styles.plus}`}>+£{plus.toFixed(2)}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className={`${styles.money} ${styles.minus}`}>
					-£{minus.toFixed(2)}
				</p>
			</div>
		</section>
	)
}

export default IncomeExpenses
