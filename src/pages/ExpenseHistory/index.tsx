import {useContext} from 'react'
import Transaction from '../../components/Transaction'
import {GlobalContext} from '../../context/GlobalState'
import styles from './ExpenseHistory.module.css'
function ExpenseHistory() {
	const context = useContext(GlobalContext)
	const expenses = context?.transactions?.filter(amount => amount.amount < 0)
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
