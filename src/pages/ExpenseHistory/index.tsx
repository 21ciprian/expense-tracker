import Transaction from '../../components/Transaction'
import {data} from '../../data'
import styles from './ExpenseHistory.module.css'

function ExpenseHistory() {
	const amounts = data
	const expenses = amounts.filter(amount => amount.amount < 0)
	return (
		<section style={{marginTop: '150px'}} className={styles.transactions}>
			<ul className={styles.list}>
				{expenses.map(expense => (
					<Transaction key={expense._id} transaction={expense} />
				))}
			</ul>
		</section>
	)
}

export default ExpenseHistory
